import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-cyan-100">
                <ul className="menu space-y-5 mt-6">
                    <li><NavLink to='/dashboard/cart'><FaCartShopping /> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaAddressCard /> Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaList /> My Booking</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;