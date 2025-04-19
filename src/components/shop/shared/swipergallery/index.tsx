"use client";
import { useState } from "react";
import MainSlider from "./mainslider/MainSlider";
import "./style.css";
import ThumbnailSlider from "./thumbnailslider/ThumbnailSlider";

const images = [
  "https://i.pinimg.com/736x/ce/ef/65/ceef654198331573b34170e1525b8f73.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwiXCHWqD5--Z74f7Qrzrbt1cqwb8V8zXOdenh99hiq2k98VZ_yUdlh_XFKFqW9Idqos&usqp=CAU",
  "https://surfiran.com/mag/wp-content/uploads/2024/04/Imaginary-View-of-Alamut-Castle.jpg",
  "https://luxuryproperties.ir/uploads/images/images/Blog/World%20Attraction/15%20Wierdest%20Place%20Across%20the%20World/13WierdestPlace.jpg",
];

export default function SwiperGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
      <MainSlider images={images} thumbsSwiper={thumbsSwiper} />
      <ThumbnailSlider images={images} setThumbsSwiper={setThumbsSwiper} />
    </div>
  );
}
