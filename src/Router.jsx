import MainLayout from "./MainLayout/MainLayout";
import Home from "./Page/Home/Home";
import {
    createBrowserRouter
  } from "react-router-dom";
import Menu from "./Page/Menu/Menu";
import Order from "./Page/Order/Order";
import Login from "./Page/Login/Login";


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
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]
    },
]);



