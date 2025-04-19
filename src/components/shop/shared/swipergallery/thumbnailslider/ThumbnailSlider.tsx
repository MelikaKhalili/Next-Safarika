import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  images: string[];
  setThumbsSwiper: (swiper: any) => void;
};

export default function ThumbnailSlider({ images, setThumbsSwiper }: Props) {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Thumbs]}
      className="thumbSwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img className="imgSwiper" src={src} alt={`thumb-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
