import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Page/Shared/Footer";
import NavBar from "../Page/Shared/NavBar";

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooder = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            { noHeaderFooder || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooder || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;