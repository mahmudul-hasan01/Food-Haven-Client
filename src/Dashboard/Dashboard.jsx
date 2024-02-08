import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const {cart} = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-red-200">
                <ul className="menu space-y-5 mt-6">
                    <li><NavLink to='/dashboard/cart'><FaCartShopping /> My Cart ({cart?.length})</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaAddressCard /> Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaList /> My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'><MdOutlineRestaurantMenu /> Menu</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;