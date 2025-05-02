"use client";
import { getFilteredProducts } from "@/components/shared/productcart/FilteredProducts";
import ProductCard from "@/components/shared/productcart/ProductCard";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ViewAllButton from "../../ViewAllButton";

export default function ShortTours() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const testfilter = "تور یک روزه";
    const fetchData = async () => {
      const data = await getFilteredProducts("Category", testfilter);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="!text-2xl !font-bold flex gap-2 items-center">
            تور های{" "}
            <span className="inline-flex items-center !text-[#26B9B0] relative">
              <FaPlus className="!text-[#26B9B0] text-xl absolute top-[-12px] left-[-20px]" />
              یک روزه
            </span>{" "}
            سفریکا
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              stroke="#26B9B0"
              strokeWidth="1.5"
              className="w-6 h-6 ml-2 group-hover:text-primary text-primary group-hover:cursor-pointer"
              viewBox="0 0 24 24"
              width="3em"
              height="3em"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"
              ></path>
            </svg>
          </h1>
        </div>
        <div>
          <ViewAllButton
            href="/products?Los=1 روزه"
            className="bg-white !border !border-[#26B9B0] !text-[#26B9B0] hover:!bg-[#26B9B0] hover:!text-white"
          />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="!min-h-fit !py-6 relative"
      >
        {filteredProducts.length > 0 &&
          filteredProducts.map((product: any) => (
            <SwiperSlide className="!h-full !shadow-md" key={product.id}>
              <ProductCard product={product} variant="default" />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute top-1/2 left-[-45px] right-[-45px] -translate-y-1/2 flex justify-between pointer-events-none z-[9999999999999999999999]">
        <button
          className="relative !bg-white p-4 rounded-md shadow-md z-50 pointer-events-auto w-10 h-10 flex justify-center items-center"
          ref={nextRef}
        >
          <GrNext className="!text-gray-500 !text-3xl" />
        </button>
        <button
          className="relative !bg-white p-4 rounded-md shadow-md z-50 pointer-events-auto w-10 h-10 flex justify-center items-center"
          ref={prevRef}
        >
          <GrPrevious className="!text-gray-500 !text-3xl" />
        </button>
      </div>
    </div>
  );
}
