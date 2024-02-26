import React from 'react';
import useCart from '../Hooks/useCart';
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, refetch } = useCart()
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = async (id) => {
        await axiosSecure.delete(`/carts/${id}`)
        refetch()
        toast.success('Deleted Successfully')
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="uppercase text-3xl">total order: {cart.length}</h1>
                <h1 className="uppercase  text-3xl">total price: {totalPrice}</h1>
               {
                cart.length ?
                 <Link to={'/dashboard/payment'}> 
                 <button className='btn btn-info'>Pay</button>
                 </Link>
                 :
                 <button disabled className='btn btn-info'>Pay</button>
               }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-blue-800'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item?.name}</div>
                                </td>
                                <td className="font-bold">$ {item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item?._id)}><MdDeleteForever className='text-3xl hover:text-red-600' /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;