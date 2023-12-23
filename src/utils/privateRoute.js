import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { login } from "../components/utils/constants";
import Login from "../pages/login/login";

const PrivateRoute = ({ component }) => {
    // Add your own authentication on the below line.
    const { getUser } = useUserContext();
    return !getUser ? <Navigate to={login} /> : component;
};

export default PrivateRoute;
