import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer";
import NavBar from "../Page/Shared/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;