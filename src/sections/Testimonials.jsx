import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';

import { FreeMode, Pagination } from 'swiper/modules';
import TestimonialCards from '../components/TestimonialCards';
import Title from '../components/Title';

export default function Testimonials() {
  return (
    <>
      <Title>
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </Title>

      <div className="testimonials-section">
        <Swiper
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <TestimonialCards />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
