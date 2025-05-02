"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ThumbnailSlider({ images, setThumbsSwiper }) {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper mt-4"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-24">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover cursor-pointer"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
