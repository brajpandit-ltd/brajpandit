"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Slider = ({ sliderData }: { sliderData: any[] }) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style"
    >
      {sliderData.map((puja, index) => {
        return (
          <div className="puja-card" key={index}>
            <div className="puja-cart2">
              <Image
                src={puja.image}
                alt={puja.title}
                width={100}
                height={100}
              />
              <h3>{puja.name}</h3>
              <p>Age: {puja.age}</p>
              <p>Experience: {puja.experience}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
    // <Swiper
    //   slidesPerView={2}
    //   spaceBetween={20}
    //   navigation={true}
    //   modules={[Navigation]}
    //   className="puja-swiper"
    // >
    //   {sliderData.map((puja, index) => (
    //     <SwiperSlide key={index}>
    //       <div className="puja-card">
    //         <Image src={puja.image} alt={puja.title} width={100} height={100} />
    //         <h3>{puja.name}</h3>
    //         <p>Age: {puja.age}</p>
    //         <p>Experience: {puja.experience}</p>
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

export default Slider;
