import MainLayout from "./MainLayout/MainLayout";
import Home from "./Page/Home/Home";
import {
    createBrowserRouter
} from "react-router-dom";
import Menu from "./Page/Menu/Menu";
import Order from "./Page/Order/Order";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import Cart from "./Dashboard/Cart";
import AllUsers from "./Dashboard/Admin/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // Admin
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
        ]
    }
]);



