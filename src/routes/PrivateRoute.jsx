import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;