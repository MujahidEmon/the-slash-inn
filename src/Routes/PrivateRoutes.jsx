import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoutes;