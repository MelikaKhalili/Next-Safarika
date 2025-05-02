"use client";
import { useState } from "react";
import MainSlider from "./mainslider/MainSlider";
import "./style.css";
import ThumbnailSlider from "./thumbnailslider/ThumbnailSlider";

interface ProductData {
  Image: string[];
  [key: string]: any;
}

interface SwiperGalleryProps {
  productData: ProductData;
}

export default function SwiperGallery({ productData }: SwiperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div>
      <MainSlider images={productData.Image} thumbsSwiper={thumbsSwiper} />
      <ThumbnailSlider
        images={productData.Image}
        setThumbsSwiper={setThumbsSwiper}
      />
    </div>
  );
}
