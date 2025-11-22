import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const { isLoading, data: payments = [], } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Payment History: {payments.length} </h3>
            {/* payment history */}
            <div>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL:</th>
        <th>Parcel Name</th>
        <th>Customer Email</th>
        <th>transactionId</th>
        <th>Amount</th>
        <th>Paid Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment, index) => <tr key={index}>
        <th>{index + 1}</th>
        <td>{payment.parcelName}</td>
        <td>{payment.customerEmail}</td>
        <td>{payment.transactionId}</td>
        <td>$ {payment.amount}</td>
        <td>{payment.paidAt}</td>
        <td>Delete</td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;