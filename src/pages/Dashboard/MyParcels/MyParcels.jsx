import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const MyParcels = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {isPending, data: parcels = [] } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
      return res.data;
    }
  })

  if(isPending){
    return <LoadingSpinner></LoadingSpinner>
  }

    return (
        <div>
          my parcels {parcels.length}
        </div>
    );
};

export default MyParcels;