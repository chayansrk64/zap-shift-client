import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import serviceImg from '../../assets/service.png'

const services = [
    {   
        id: 1,
        title: "Express  & Standard Delivery",
        description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {   
        id: 2,
        title: "Nationwide Delivery",
        description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {   
        id: 3,
        title: "Fulfillment Solution",
        description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {   
        id: 4,
        title: "Cash on Home Delivery",
        description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {   
        id: 5,
        title: "Corporate Service / Contract In Logistics",
        description: "Customized corporate services which includes warehouse and inventory management support."
    },
    {   
        id: 6,
        title: "Parcel Return",
        description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    },
]

const OurServices = () => {
    return (
        <div className='bg-secondary rounded-3xl'>
            <div className='py-10'>
                <div className=''>
            <SectionTitle 
            title="Our Services"
            subtitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
            textColor='text-white'
            />
            </div>
            {/* card container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-10'>
                {
                    services.map(service =>  
                        <div className='bg-white p-4 text-center rounded-2xl'>
                            <img className='mx-auto bg-secondary p-4 rounded-full' src={serviceImg} alt="" />
                            <h4 className="text-2xl my-4">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>)
                }
            </div>
            </div>
           
        </div>
    );
};

export default OurServices;