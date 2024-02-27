import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";

const CheckoutForm = () => {

    const [clientSecret, setcClientSecret] = useState('')
    const {user} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const {cart} = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post(`/payment-intent`, {price: totalPrice})
        .then(res => {
            console.log(res?.data?.clientSecret);
            setcClientSecret(res?.data?.clientSecret)
        })
    } ,[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            toast.error(error.message)
            
        }else{
            // toast.success("Payment Done", paymentMethod?.id)
            console.log(paymentMethod);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log(confirmError);
        }else{
            console.log(paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                toast.success( paymentIntent?.id)
            }
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-neutral btn-md mt-8" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;