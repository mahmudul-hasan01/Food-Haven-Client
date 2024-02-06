import { Link, NavLink } from 'react-router-dom';
import image from '../../../public/chef-hat-with-spoon-fork_602006-247.avif'
import { navLink } from './NavLink';
import useAuth from '../../Hooks/useAuth';
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useState } from 'react';
import useCart from '../../Hooks/useCart';

const NavBar = () => {

    const {cart} =useCart()

    const { user, logOut } = useAuth()
    
    const HandlelogOut = () => {
        logOut()
            .then(() => { })
    }

    return (
        <div className="navbar fixed z-50 max-w-screen-xl text-white bg-black/50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52 gap-3">
                        {navLink}
                    <Link to='/'>
                        <button className="btn btn-sm">
                            <FaShoppingCart className='text-xl' />
                            <div className="badge badge-secondary">+{cart?.length}</div>
                        </button>
                    </Link>
                    </ul>
                </div>
                <img className='w-16 h-16 rounded-full mr-4' src={image} alt="" />
                <p className='font-bold text-2xl'>Food <span className='text-red-500'>Haven</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLink}
                </ul>
                <Link to='/'>
                    <button className="btn btn-sm ml-3">
                        <FaShoppingCart className='text-xl' />
                        <div className="badge badge-secondary">+{cart?.length}</div>
                    </button>
                </Link>
            </div>
            <div className="navbar-end mr-6">
                {
                    user?.email ?
                        <button className='btn btn-outline text-white border-white uppercase' onClick={HandlelogOut}>LogOut</button>
                        :
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending, isTransitioning }) =>
                                [
                                    isPending ? "pending" : "",
                                    isActive ? "text-yellow-500 underline" : "",
                                    isTransitioning ? "transitioning" : "",
                                ].join(" ")
                            }
                        >
                            Login
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;