"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
export default function Carousel() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="h-[50vh] center w-[50vw]"
      style={{
        "--swiper-pagination-color": "#75B12C",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <SwiperSlide className="center">
        <Image
          src="/images/aneis.jpg"
          height={100}
          width={100}
          alt="carousel item"
          className="w-[100%] h-[100%]  block"
          unoptimized="true"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/argolas.jpg"
          height={100}
          width={100}
          alt="carousel item"
          className="w-[100%] h-[100%] object-cover block"
          unoptimized="true"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/bracelete.jpg"
          height={100}
          width={100}
          alt="carousel item"
          className="w-[100%] h-[100%] object-cover block"
          unoptimized="true"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/aneis.jpg"
          height={100}
          width={100}
          alt="carousel item"
          className="w-[100%] h-[100%] object-cover block"
          unoptimized="true"
        />
      </SwiperSlide>
    </Swiper>
  );
}
