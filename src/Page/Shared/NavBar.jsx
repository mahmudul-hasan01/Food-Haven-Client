import image from '../../../public/chef-hat-with-spoon-fork_602006-247.avif'
import { navLink } from './NavLink';

const NavBar = () => {
    return (
        <div className="navbar fixed z-50 max-w-screen-xl text-white bg-black/50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                       {navLink}
                    </ul>
                </div>
                <img className='w-16 h-16 rounded-full mr-4' src={image} alt="" />
                <p className='font-bold text-2xl'>Food <span className='text-red-500'>Haven</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;