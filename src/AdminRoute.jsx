import useAdmin from "./Hooks/useAdmin";
import useAuth from "./Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = () => {
    const {user, loading} = useAuth()
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()

    if(loading || isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;