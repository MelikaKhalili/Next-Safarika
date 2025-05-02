"use client";
import { getToptravelogues } from "@/api/userApi";
import BrandLogo from "@/assets/images/BrandLogo.jpg";
import { BASE_URL } from "@/constant/config";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Travelogue() {
  const [itinerary, setItinerary] = useState([]);
  const [openModal, setIsOpenModal] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getToptravelogues();
      setItinerary(data);
    };
    fetchData();
  }, []);
  const ShowModal = (status) => {
    setIsOpenModal(status);
  };
  console.log(itinerary);
  return (
    <div className="flex flex-col gap-8 !p-14">
      <div className="flex justify-center items-center">
        <h1 className="!text-2xl !font-bold">
          با سفرنامه ها میتونی اطلاعات بیشتری از تور ها به دست بیاری!
        </h1>
      </div>
      <p className="!text-2xl !font-bold">سفرنامه های برتر</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="!h-[100%] !min-h-fit !p-8 "
      >
        {itinerary.map((item) => {
          return (
            <SwiperSlide
              className="!w-80 !h-96 relative  !shadow-md hover:!shadow-xl !p-4 rounded-xl !border-2 !border-white/90 cursor-pointer"
              onClick={() => ShowModal(true)}
            >
              <div className="flex items-center gap-4">
                <div className="relative ">
                  {item?.userImage && (
                    <img
                      src={`${BASE_URL}${item.userImage}`}
                      alt="Tour Image"
                      className="!rounded-full !w-[60px] !h-[60px] !border-2 !border-green-700 "
                    />
                  )}
                </div>
                <div className="flex flex-col !text-sm gap-2">
                  <p className="!text-md !font-bold">{item.Traveloguename}</p>
                  <p>{item.Writingdate}</p>
                </div>
              </div>
              <div className="!h-56 mt-10 ">
                {item?.Traveloguephoto && (
                  <img
                    src={`${BASE_URL}${item.Traveloguephoto}`}
                    alt="itinerary"
                    className="!h-full !rounded-md"
                  />
                )}
              </div>
              {/* <div className=" flex !flex-col justify-center items-center gap-4 absolute top-16 w-full"></div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/70 flex justify-center items-center">
          <div className="relative">
            <button
              onClick={() => ShowModal(false)}
              className="cursor-pointer absolute top-[-160px] right-4 !py-2 !px-2 rounded-md shadow-md"
            >
              <RxCross2 className="!text-red-500 !text-xl" />
            </button>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col justify-center items-center gap-8 relative">
              <Image
                className=" h-24 rounded-full"
                width={"100"}
                height={"100"}
                src={BrandLogo}
                alt="BrandLogo"
              />
              <h1 className="!text-2xl !font-bold">سفریکا</h1>
              <p className="text-center !text-md">
                برای دیدن سفرنامه‌ها وارد اپلیکیشن <br />
                گردشگری سفریکا شوید!
              </p>
              <Button bg={"#26b9b0"} textColor={"white"}>
                دانلود اپلیکیشن (Android & iOS)
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        <div className="absolute top-[-15rem] left-[-45px] right-[-45px] -translate-y-1/2 flex justify-between pointer-events-none ">
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
