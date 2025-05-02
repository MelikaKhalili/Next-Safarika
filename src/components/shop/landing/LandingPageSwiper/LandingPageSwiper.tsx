"use client";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./LandingPageSwiper.css";

interface LandingPageSwiperProps {
  title: string;
  description?: string;
  images: string[];
  className?: string;
  height?: string;
}

export default function LandingPageSwiper({
  title,
  description,
  images,
  className = "",
  height = "h-[400px]",
}: LandingPageSwiperProps) {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.classList.remove("active-slide");
      });
      const active = document.querySelector(".swiper-slide-active");
      if (active) {
        active.classList.add("active-slide");
      }
    });
    const swiperEl = document.querySelector(".swiper-wrapper");
    if (swiperEl)
      observer.observe(swiperEl, {
        attributes: true,
        childList: true,
        subtree: true,
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full ${height} ${className}`}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ type: "progressbar" }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full relative">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
