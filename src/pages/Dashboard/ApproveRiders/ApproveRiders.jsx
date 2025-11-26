import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { FaEye, FaTrashCan, FaUserCheck, FaUserMinus } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const {isLoading, data: riders = [], refetch} = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = {status: status, email: rider.email}
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
        .then(res => {
            if(res.data.modifiedCount){
                refetch()

                Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `Rider Request is set to ${status}`,
                 showConfirmButton: false,
                 timer: 2000
                 });               
            }
        })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, 'approved')
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, 'rejected')
    }


    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
            <h3 className='text-3xl font-semibold'>Pending Riders Approval: {riders.length}</h3>

            {/* riders */}
            <div>
                {
                    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL:</th>
        <th>Name</th>
        <th>Email</th>
        <th>District</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        riders.map((rider, index) =>  <tr key={index}>
        <th>{index + 1}</th>
        <td>{rider.riderName}</td>
        <td>{rider.email}</td>
        <td>{rider.district}</td>
        <td>
            <p className={`${rider.status === 'approved' ? "text-green-800" : "text-red-500"}`}>{rider.status}</p>
        </td>
        <td className='space-x-1'>
            <button  className='btn'><FaEye /></button>
            <button onClick={() => handleApproval(rider)} className='btn'><FaUserCheck /></button>
            <button onClick={() => handleRejection(rider)} className='btn'><FaUserMinus /></button>
            <button className='btn'><FaTrashCan /></button>
        </td>

      </tr>)
      }
     
    </tbody>
  </table>
</div>
                }
            </div>
        </div>
    );
};

export default ApproveRiders;