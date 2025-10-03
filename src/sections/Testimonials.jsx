import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../styles/Testimonials.css';
import '../styles/TestimonialCards.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import TestimonialCards from '../components/TestimonialCards';
import Title from '../components/Title';
export default function Testimonials() {
  return (
    <>  
    <Title>
        <h2>Testomonials</h2>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
    </Title>
    <section className='testimonials'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <TestimonialCards />
        </SwiperSlide>
        <SwiperSlide><TestimonialCards /></SwiperSlide>
        <SwiperSlide><TestimonialCards /></SwiperSlide>
        <SwiperSlide><TestimonialCards /></SwiperSlide>
        <SwiperSlide><TestimonialCards /></SwiperSlide>
        <SwiperSlide><TestimonialCards /></SwiperSlide>
      </Swiper>
    </section>
    </>
  );
}
