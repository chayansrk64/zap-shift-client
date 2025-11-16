import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from 'swiper/modules';
import 'swiper/css';

import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people] 

const Brands = () => {
  return (
    <div className="py-10">
        <div className="text-center my-10 text-2xl font-semibold text-secondary"><h3>We've helped thousand's of sales teams</h3></div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {
            brandLogos.map((brand, index) => <SwiperSlide key={index}><img src={brand} alt="" /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Brands;
