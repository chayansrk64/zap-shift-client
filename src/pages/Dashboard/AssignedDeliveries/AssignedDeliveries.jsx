import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignedDeliveries = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: parcels = []} = useQuery({
        queryKey: ['parcels', user.email, 'driver-assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assigned`)
            return res.data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Assigned Deliveries</h3>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {parcels.map((parcel, i) => <tr key={parcel._id}>
        <th>{i + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)}
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AssignedDeliveries;