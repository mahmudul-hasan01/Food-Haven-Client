import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProviders";

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuth;