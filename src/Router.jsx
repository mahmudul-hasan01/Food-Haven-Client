import MainLayout from "./MainLayout/MainLayout";
import Home from "./Page/Home/Home";
import {
    createBrowserRouter
  } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);



