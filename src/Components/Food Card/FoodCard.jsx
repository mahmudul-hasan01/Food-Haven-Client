import axios from 'axios'
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {

    const { name, price, image, recipe, _id } = item
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    const {refetch} = useCart()
    const axiosSecure = useAxiosSecure()

    const handleClick = () => {
        if (user) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res?.data?.insertedId){
                    toast.success('Add To Cart Successfully')
                    refetch()
                }
            })
        } else {
            toast.error('Please Login')
            navigate('/login', { state: { from: location } })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="text-white bg-black absolute right-5 top-5 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleClick} className="btn bg-black text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;