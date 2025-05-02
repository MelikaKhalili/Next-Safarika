"use client";
import { getTehrantours } from "@/api/userApi";
import { BASE_URL } from "@/constant/config";
import { Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TravelGuide.css";

const Tag = [
  "آخرین راهنماها",
  "پربازدیدترین ها",
  "روستاگردی",
  "پیاده روی",
  "کافه-رستوران",
  "کمپینگ",
  "تهران گردی",
  "مراکز خرید",
  "تفریحات و سرگرمی",
  "اقامتگاه های خاص",
];

export default function TravelGuide() {
  const [tehrantours, setTehrantours] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTehrantours();
      setTehrantours(data);
    };
    fetchData();
  }, []);
  console.log(tehrantours);
  return (
    <div className="!px-8 BackGroundTravelGuide">
      <div className="flex justify-between w-full ">
        <h1 className="!text-2xl !font-bold">راهنمای سفر</h1>
        <Button
          bg={"white"}
          border={"1px solid "}
          color={"#26b9b0"}
          _hover={{ bg: "#26b9b0", color: "white" }}
          size={"md"}
        >
          مشاهده همه
        </Button>
        {/* <Button className="!bg-red-600" onClick={() => addToApi2()}></Button> */}
      </div>
      <div className="flex flex-col items-center w-full p-8">
        <div className="w-11/12 sm:w-9/12 relative">
          <div
            className="!bg-white absolute top-[40px] -translate-y-1/2 right-[-20px] z-10 cursor-pointer group "
            id="nextBtn"
          >
            <GrNext className="text-black  group-hover:text-primary !w-5 !h-5" />
          </div>
          <div
            className="!bg-white absolute top-[40px] -translate-y-1/2 left-[-20px] z-10 cursor-pointer group"
            id="prevBtn"
          >
            <GrPrevious className="text-black group-hover:text-primary !w-5 !h-5" />
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: "#nextBtn",
              prevEl: "#prevBtn",
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            dir="rtl"
            spaceBetween={8}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 7 },
            }}
            className="!py-6 !h-[50px]"
          >
            {Tag.map((tag, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center !h-[100px]"
              >
                <p className=" px-4  rounded-lg text-sm 2xl:text-base font-medium text-textMainBody hover:!bg-tint-01 hover:cursor-pointer">
                  {tag}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="!h-[100%] !min-h-fit !p-8 "
      >
        {tehrantours.map((tour) => {
          return (
            <SwiperSlide className="!h-full !shadow-md relative">
              <div className="relative">
                {tour?.image && (
                  <img
                    src={`${BASE_URL}${tour.image}`}
                    alt="Tour Image"
                    style={{
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                )}
              </div>
              <div className=" flex !flex-col justify-center items-center gap-4 absolute top-16 w-full">
                <p
                  style={{
                    textShadow: "10px 2px 9px black",
                  }}
                  className="!text-lg !font-bold !text-white"
                >
                  {tour.Category}
                </p>
                <p
                  style={{
                    textShadow: "5px 3px 8px black",
                  }}
                  className=" !text-2xl !font-bold !text-white"
                >
                  {tour.Neighborhood}
                </p>
                <button className="!bg-[rgba(103,58,183,0.4)] !py-1 !px-4 rounded-full !text-white flex justify-center items-center gap-1">
                  <IoLocationOutline />
                  {tour.locarion}
                </button>
              </div>
              <div className="!bg-[rgba(103,58,183,0.7)] absolute bottom-5 right-2 !text-sm !text-white rounded-xl p-4">
                <p className="truncate-lines">{tour.Description[0]}</p>
                <p className="truncate-lines">{tour.Description[1]}</p>
                <p className="truncate-lines">{tour.Description[2]}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center gap-1 !px-8">
        <MdOutlineLiveHelp className="!text-lg" />
        <p className="!text-lg !font-bold">
          راهنمای سفر چه کمکی به من می کند؟{" "}
          <a className="!text-[#26b9b0] !text-sm" href="">
            اینجارو بخون
          </a>
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-[-20rem]   -translate-y-1/2 flex justify-between pointer-events-none z-[9999999999999999999999] w-full">
          <button
            className="relative  !bg-white p-4 rounded-md shadow-md  z-50 pointer-events-auto w-10 h-10 flex justify-center items-center"
            ref={nextRef}
          >
            <GrNext className="!text-gray-500  !text-3xl" />
          </button>
          <button
            className="relative  !bg-white p-4 rounded-md shadow-md z-50 pointer-events-auto w-10 h-10 flex justify-center items-center"
            ref={prevRef}
          >
            <GrPrevious className="!text-gray-500 !text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
