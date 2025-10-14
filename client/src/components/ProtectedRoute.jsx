import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);

    if (loading) <loading>Loading...</loading>

    return user? children: <Navigate to="/login" replace/>
}

export default ProtectedRoute;