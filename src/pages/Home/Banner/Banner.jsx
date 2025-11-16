import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { FaCircleArrowUp } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div>
            <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            >
                <div className='relative'>
                    <img src={bannerImg1} />
                    <div className='absolute bottom-[50px] flex gap-2 ms-20'>
                        <button className='btn bg-primary rounded-full text-lg'>Track Your Percel</button>
                        <button className=' text-4xl text-secondary rotate-45'> <FaCircleArrowUp /> </button>
                        <button className='btn bg-transparent text-lg'>Be a rider</button>
                    </div>
                </div>
                <div className='relative' >
                    <img src={bannerImg2} />
                     <div className='absolute bottom-[50px] flex gap-2 ms-20'>
                        <button className='btn bg-primary rounded-full text-lg'>Track Your Percel</button>
                        <button className=' text-4xl text-secondary rotate-45'> <FaCircleArrowUp /> </button>
                        <button className='btn bg-transparent text-lg'>Be a rider</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={bannerImg3} />
                     <div className='absolute bottom-[50px] flex gap-2 ms-20'>
                        <button className='btn bg-primary rounded-full text-lg'>Track Your Percel</button>
                        <button className=' text-4xl text-secondary rotate-45'> <FaCircleArrowUp /> </button>
                        <button className='btn bg-transparent text-lg'>Be a rider</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;