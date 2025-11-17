import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();
    const location = useLocation()
    

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;