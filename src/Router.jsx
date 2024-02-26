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
import AddItems from "./Dashboard/Admin/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "./Dashboard/Admin/ManageItems";
import Update from "./Dashboard/Admin/UpdateItem";
import Payment from "./Dashboard/Payment";


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
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // Admin
            {
                path: 'allUsers',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AllUsers></AllUsers>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'addItems',
                element:
                    <AdminRoute>
                        <AddItems></AddItems>
                    </AdminRoute>
            },
            {
                path: 'manageItems',
                element:
                    <AdminRoute>
                        <ManageItems></ManageItems>
                    </AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element:
                    <AdminRoute>
                        <Update></Update>
                    </AdminRoute>, 
                // loader: ({params}) => fetch(`http://localhost:5000/menu/${params?.id}`)
                
            },
        ]
    }
]);



