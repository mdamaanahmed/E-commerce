import React from "react"
import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
    const token = localStorage.getItem('user');

    if (token) {
        return <Navigate replace to="/home" />
    }
    else {
        return <Outlet />
    }
}
export default PublicRoute