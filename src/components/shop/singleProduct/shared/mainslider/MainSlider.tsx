"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

interface MainSliderProps {
  images: string[];
  thumbsSwiper: any;
}

export default function MainSlider({ images, thumbsSwiper }: MainSliderProps) {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as any
      }
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Navigation, Thumbs, Pagination]}
      className="mySwiper2"
      thumbs={{ swiper: thumbsSwiper }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-96">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
