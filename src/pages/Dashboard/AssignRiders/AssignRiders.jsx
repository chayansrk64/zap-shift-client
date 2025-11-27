import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignRiders = () => {
    const axiosSecure = useAxiosSecure()
    const [selectedParcel, setSelectedParcel] = useState(null)
     const riderModalRef = useRef()

    const {data: parcels = [], refetch: parcelsRefetch } = useQuery({
        queryKey: ['parcels', 'pending-picup' ],
        queryFn: async() => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })

   

     const {data: riders = []} = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
          const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`)
          return res.data
        }
    })


    const openAssignRiderModal = parcel => {
        setSelectedParcel(parcel)
        riderModalRef.current.showModal()
        console.log(parcel.senderDistrict);
    }


    const handleAssignRider = rider => {
        const riderAssignInfo = {
           riderId: rider._id,
           riderName: rider.riderName,
           riderEmail: rider.email,
           parcelId: selectedParcel._id
        }

        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
        .then(res => {
           if(res.data.modifiedCount){

            riderModalRef.current.close()
            parcelsRefetch()
            
              Swal.fire({
                title: "Rider has been assigned!",
                text: "Your parcel request has been deleted.",
                icon: "success",
                timer: 2000
              });             
           }
        })

    }
   
    

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
            <button
            onClick={() => openAssignRiderModal(parcel)}
            className='btn btn-primary text-black'>Find Riders</button>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>

            {/* modal for assign riders */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
          {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
          <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Riders: {riders.length}</h3>
            {/* riders table */}
              <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riders.map((rider, i) =>  <tr key={rider._id}>
                        <th>{i + 1}</th>
                        <td>{rider.riderName}</td>
                        <td>{rider.email}</td>
                        <td>
                          <button
                           onClick={() => handleAssignRider(rider)}
                           className='btn btn-primary text-black'>Assign</button>
                        </td>
                      </tr>)}
                     
                    
                    </tbody>
                  </table>
                </div>
                              
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
    );
};

export default AssignRiders;