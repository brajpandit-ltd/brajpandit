"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Slider = ({ sliderData }: { sliderData: any[] }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      navigation={true}
      modules={[Navigation]}
      className="puja-swiper"
    >
      {sliderData.map((puja, index) => (
        <SwiperSlide key={index}>
          <div className="puja-card">
            <Image src={puja.image} alt={puja.title} width={100} height={100} />
            <h3>{puja.title}</h3>
            <p>{puja.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
