import React from 'react';
import slide1 from '../assets/Slider_plants1.jpg'
import slide2 from '../assets/Slider_plants2.jpg'
import slide3 from '../assets/Slider_plants3.jpg'
import slide4 from '../assets/Slider_plants4.jpg'
import slide5 from '../assets/Slider_plants5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Slider = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <div style={{ width: '100%', height: '600px' }} className='gap-8'> 
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          reverseDirection: false,
          disableOnInteraction: true,
        }}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                 objectFit: 'cover', 
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
 


    </div>
  );
};

export default Slider;
