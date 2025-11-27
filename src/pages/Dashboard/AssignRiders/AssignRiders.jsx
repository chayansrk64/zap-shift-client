import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure()
    const {data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-picup' ],
        queryFn: async() => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })

    console.log(parcels);

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Assign Riders for parcels: {parcels.length}</h3>
            <div>
<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Created At</th>
        <th>Picup District</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        parcels.map((parcel, index) =>  <tr key={parcel._id}>
        <th>{index + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>{parcel.createdAt}</td>
        <td>{parcel.senderDistrict}</td>
        <td>
            <button className='btn btn-primary text-black'>Assign Rider</button>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AssignRiders;