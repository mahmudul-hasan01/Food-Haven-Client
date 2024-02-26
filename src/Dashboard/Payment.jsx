import SectionTitle from "../Components/SectionTitle/SectionTitle";
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please Pay'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;