import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const RiderDashboardHome = () => {
      const {user} = useAuth()
      const axiosSecure = useAxiosSecure()

    const {data: deliveryStats = []} = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders/delivery-per-day?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl font-semibold">Rider Dashboard Home</h3>

         {
        deliveryStats.map(stat =>   <div key={stat._id} className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-xl font-semibold">{stat._id}</div>
          <div className="stat-value">{stat.deliveredCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>)
      }
        </div>
    );
};

export default RiderDashboardHome;