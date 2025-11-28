import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const RiderRoute = ({children}) => {
    const {loading, user} = useAuth();
    const {roleLoading, role} = useRole()
    console.log('in the RiderRoute role', role);

    if(loading || !user || roleLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(role !== 'rider'){
        return <>
                 
                <div className='min-h-screen text-3xl flex items-center justify-center uppercase text-red-500 font-semibold'>
                    <h3>You're forbidden for this page!</h3>
                </div>
        </>
    }

    return children;
};

export default RiderRoute;