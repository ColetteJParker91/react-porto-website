import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="" alt="" />
          </div>
          <h5 className="client_name">Elton</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            saepe.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="" alt="" />
          </div>
          <h5 className="client_name">George</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            saepe.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src="" alt="" />
          </div>
          <h5 className="client_name">Trixie</h5>
          <small className="client_review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            saepe.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
