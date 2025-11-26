import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()

    const {isLoading, data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })


    const handleMakeUser = user => {
      const userInfo = {role : 'admin'}
        axiosSecure.patch(`/users/${user._id}`, userInfo)
        .then(res => {
          console.log('role updated => ', res.data);
          if(res.data.modifiedCount){
            refetch()
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is set to Admin`,
              showConfirmButton: false,
              timer: 2000
              });            
          }
        })
    }


    const handleRemoveAdmin = user => {
        const userInfo = {role: 'user'}
        axiosSecure.patch(`/users/${user._id}`, userInfo)
        .then(res => {
          if(res.data.modifiedCount){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.displayName} is set to user`,
              showConfirmButton: false,
              timer: 2000
              });  
          }
        })
    }


    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Manage Users: {users.length}</h3>

            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>   <tr key={index}>
        <td>
          {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar of User" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.role}
        </td>
        <td>
          {
            user.role === 'admin' ? 
            <button onClick={() => handleRemoveAdmin(user)} className='btn bg-red-300'> <FiShieldOff></FiShieldOff> </button>
            : 
            <button onClick={() => handleMakeUser(user)} className='btn bg-green-300'> <FaUserShield></FaUserShield> </button>
          }
          
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">delete</button>
        </th>
      </tr>)
      }
    
    </tbody>
  
  </table>
</div>
            </div>

        </div>
    );
};

export default ManageUsers;