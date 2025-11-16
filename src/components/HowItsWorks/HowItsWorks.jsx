import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const works = [
    {   
        id: 1,
        title: "Booking Pick & Drop",
        description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {   
        id: 2,
        title: "Cash on Delivery",
        description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {   
        id: 3,
        title: "Delivery Hub",
        description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {   
        id: 4,
        title: "Booking SME & Corporate",
        description: "From personal packages to business shipments — we deliver on time, every time."
    },
]

const HowItsWorks = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h3 className="text-3xl font-semibold text-secondary">How It's Works</h3>
            <div className='flex flex-col md:flex-row gap-6 my-5'>
                {
                    works.map(work => <div key={work.id} className='shadow-lg p-4 rounded-2xl bg-white'>
                    <span className='text-5xl '><CiDeliveryTruck /></span>
                    <h4 className='text-xl font-semibold text-secondary py-3'>{work.title}</h4>
                    <p>{work.description}</p>
                </div>)
                }
            </div>
        </div>
    );
};

export default HowItsWorks;