import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: parcels = [], refetch} = useQuery({
        queryKey: ['parcels', user.email, 'driver-assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assigned`)
            return res.data;
        }
    })



    const handleDeliveryStatusUpdate = (parcel, status) => {
        const statusInfo = {
            deliveryStatus: status,
            riderId: parcel.riderId
        }
        const message = `Parcel status updated ${status.split('-').join(' ')}`
        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
        .then(res => {
            if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: message,
                    showConfirmButton: false,
                    timer: 2000
                    });   
            }
        })
    }

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
        <th>Actions</th>
        <th>Others</th>
      </tr>
    </thead>
    <tbody>

      {parcels.map((parcel, i) => <tr key={parcel._id}>
        <th>{i + 1}</th>
        <td>{parcel.parcelName}</td>
        <td>
            {
                parcel.deliveryStatus === 'driver-assigned' ? <>
                <button onClick={() => handleDeliveryStatusUpdate(parcel, 'rider-arriving')} className="btn btn-sm btn-primary text-black">Accept</button>
                <button className="btn btn-sm btn-warning text-black ms-2">Reject</button>
                </>
                : 'Accepted'
            }
        </td>
        <td>
             <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel-picked-up')} className="btn btn-sm btn-primary text-black">Marked As Picked Up</button>
              <button onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel-delivered')} className="btn btn-sm btn-primary text-black ms-2">Marked As Delivered</button>
        </td>
      </tr>)}
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AssignedDeliveries;