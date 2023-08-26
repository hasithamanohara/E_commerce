import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const UserProtected = () => {
    const User = true;
    return (
        User ? <Outlet /> : <Navigate to='login' />

    )
}

export default UserProtected
