import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <span className="loading loading-dots loading-xs"></span>
    if(user) return children
    return <Navigate to='/login' state={location.pathname} replace={true} />
};

export default PrivateRoute;