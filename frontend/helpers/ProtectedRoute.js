import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem('user');

    if (token) {
        return <Outlet />
    }
    else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute