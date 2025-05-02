"use client";
import StandardIcon from "@/assets/images/standard-icon.png";
import { Product } from "@/components/dash/products/types";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductGuideProps {
  products: Product[];
  gridRows?: number;
}

export default function ProductGuide({
  products,
  gridRows,
}: ProductGuideProps) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      grid={gridRows ? { rows: gridRows, fill: "row" } : undefined}
      navigation
      className="!px-4"
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products.map((product: Product, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href={`/products/${product.id}`} passHref>
              <div
                key={index}
                className="w-[22rem] h-96 bg-red-600 rounded-xl hover:shadow-2xl overflow-hidden flex flex-col mb-60"
              >
                <div className="h-3/5 relative">
                  {product?.Image?.[0] && (
                    <img
                      className="w-full !h-48 object-cover"
                      src={product.Image[0]}
                      alt={product.TourName}
                    />
                  )}
                </div>
                <div className="flex flex-col p-4 text-white !bg-amber-600 gap-4">
                  <h2 className="!text-[17px]">{product.TourName}</h2>
                  <div className="flex w-full justify-between">
                    <p>{product.Los || "مدت زمان تور"}</p>
                    <p>
                      مجری تور :
                      <p className="inline-block">
                        {product.Tourleader || "نامشخص"}
                      </p>
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>{product.Price} تومان</p>

                    <button className="flex flex-row-reverse gap-1 justify-center ">
                      {product.Star || "4.5"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="yellow"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="yellow"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="gray"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      <p>{product.startTravelDataTime || "تاریخ حرکت"}</p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01"
                          stroke="gray"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <div className="flex items-center justify-center">
                      <p>استاندارد پلاس</p>
                      <Image
                        className="!w-6 !h-6"
                        src={StandardIcon}
                        alt="StandardIcon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
