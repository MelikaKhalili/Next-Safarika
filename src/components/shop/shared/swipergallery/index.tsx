"use client";
import { useState } from "react";
import MainSlider from "./mainslider/MainSlider";
import "./style.css";
import ThumbnailSlider from "./thumbnailslider/ThumbnailSlider";

export default function SwiperGallery({ productData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = productData?.Image || [];

  return (
    <div className="container">
      <MainSlider images={images} thumbsSwiper={thumbsSwiper} />
      <ThumbnailSlider images={images} setThumbsSwiper={setThumbsSwiper} />
    </div>
  );
}
