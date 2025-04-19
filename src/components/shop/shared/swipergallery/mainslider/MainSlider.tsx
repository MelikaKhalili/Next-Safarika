import { useRef } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  images: string[];
  thumbsSwiper: any;
};

export default function MainSlider({ images, thumbsSwiper }: Props) {
  const swiperRef = useRef<any>(null);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mainSwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img className="imgSwiper" src={src} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="button-container">
        <button
          className="!bg-blue-100/70 hover:!bg-blue-200/80 transition-all !px-2 !py-1 rounded-md shadow-md"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdOutlineNavigateNext size={25} className="!text-blue-600" />
        </button>
        <button
          className="!bg-blue-100/70 hover:!bg-blue-200/80 transition-all !px-2 !py-1 rounded-md shadow-md"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <GrFormPrevious size={25} className="!text-blue-600" />
        </button>
      </div>
    </div>
  );
}
