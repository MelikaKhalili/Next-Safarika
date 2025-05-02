"use client";
import RedDiscountSection from "@/assets/images/RedDiscountSection.png";
import StrapDiscountSection from "@/assets/images/StrapDiscountSection.png";
import Bali from "@/assets/images/SwiperImages/Bali.jpg";
import Canada from "@/assets/images/SwiperImages/Canada.jpg";
import Maldiv from "@/assets/images/SwiperImages/Maldiv.jpg";
import Qeshm from "@/assets/images/SwiperImages/Qeshm.jpg";
import SouthKorean from "@/assets/images/SwiperImages/SouthKorean.jpg";
import Thailand from "@/assets/images/SwiperImages/Thailand.jpg";
import Tokyo from "@/assets/images/SwiperImages/Tokyo.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
export default function App() {
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress);
    progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="flex relative gap-4  top-80 right-20  z-[99] text-xl">
        <button className="glass-backdrop custom-prevBtn ">
          <GrNext className="text-white" />
        </button>
        <button className="glass-backdrop custom-nextBtn">
          <GrPrevious className="text-white" />
        </button>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prevBtn",
          nextEl: ".custom-nextBtn",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
              <div className="!py-28 flex flex-col gap-4 mr-56 ">
                <h1 className="!text-2xl !font-semibold ">
                  سفر به یک مقصد رویایی جذاب <br />
                  تور ویژه اندونزی
                </h1>
                <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                  <button className="text-sm">جزئیات و رزرو</button>
                  <GrPrevious />
                </div>
              </div>
              <div className="relative top-0 left-[-70px] rotate-[353deg] !z-[999999]">
                <img
                  className="!w-8"
                  src={StrapDiscountSection.src}
                  alt="StrapDiscountSection"
                />
              </div>
              <motion.div
                animate={{ rotate: [1, 1.5, -1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative top-10 right-4 z-30"
              >
                <p className="text-[12px] text-white absolute top-[40px] rotate-[4deg] z-10  left-[25px]">
                  پیشنهاد ویژه <br />
                  سفریکا
                </p>
                <img
                  className="!w-32 !h-32"
                  src={RedDiscountSection.src}
                  alt="DiscountLogo"
                />
              </motion.div>
            </div>
            <img src={Bali.src} alt="Bali" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
              <div className="!py-28 flex flex-col gap-6 mr-56 ">
                <h1 className="!text-2xl !font-semibold ">
                  سفری فراموش نشدنی به بالی
                </h1>
                <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                  <button className="text-sm">جزئیات و رزرو</button>
                  <GrPrevious />
                </div>
              </div>
            </div>
            <img src={Maldiv.src} alt="DivarChin" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
              <div className="!py-28 flex flex-col gap-6 mr-56 ">
                <h1 className="!text-2xl !font-semibold ">
                  یک سفر به جنگل های استوایی منتظر شماست!{" "}
                </h1>
                <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                  <button className="text-sm">جزئیات و رزرو</button>
                  <GrPrevious />
                </div>
              </div>
            </div>
            <img src={Thailand.src} alt="Thailand" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
            <div className="!py-28 flex flex-col gap-6 mr-56 ">
              <h1 className="!text-lg !font-semibold ">
                اگر به دنبال آرامش و زیبایی هستید،جزیره قشم بهترین انتخاب برای
                شماست. <br />
                همین حالا برنامه‌ریزی کنید و از سفر بهشتی خود لذت ببرید!
              </h1>
              <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                <button className="text-sm">جزئیات و رزرو</button>
                <GrPrevious />
              </div>
            </div>
          </div>
          <img src={Qeshm.src} alt="imgOne" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
            <div className="!py-28 flex flex-col gap-6 mr-56 ">
              <h1 className="!text-lg !font-semibold ">
                با سفر به کره جنوبی، دنیایی از زیبایی‌ها و جاذبه‌های <br />
                منحصر به فرد را کشف کنید. فرصتی عالی برای استراحت و تجربه‌های
                جدید
              </h1>
              <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                <button className="text-sm">جزئیات و رزرو</button>
                <GrPrevious />
              </div>
            </div>
          </div>
          <img src={SouthKorean.src} alt="SouthKorean" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
            <div className="!py-28 flex flex-col gap-6 mr-56 ">
              <h1 className="!text-lg !font-semibold ">
                سفر به تایوان با تورهای اختصاصی ما، <br />
                به شما این امکان را می‌دهد که دنیایی از زیبایی‌ها و شگفتی‌ها را
                از نزدیک ببینید
              </h1>
              <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                <button className="text-sm">جزئیات و رزرو</button>
                <GrPrevious />
              </div>
            </div>
          </div>
          <img src={Canada.src} alt="Canada" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[-20px] right-[-250px] bg-blue-200/65 backdrop-blur-md w-[900px] h-[600px] rounded-full flex justify-center z-10">
            <div className="!py-28 flex flex-col gap-6 mr-56 ">
              <h1 className="!text-lg !font-semibold ">
                در ژاپن با ما همراه شوید و دنیای جدیدی <br />
                از فرهنگ و زیبایی‌های طبیعی را کشف کنید. همین حالا رزرو کنید!
              </h1>
              <div className="flex justify-center items-center gap-4 bg-blue-400 rounded-md  cursor-pointer w-[180px] h-8 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
                <button className="text-sm">جزئیات و رزرو</button>
                <GrPrevious />
              </div>
            </div>
          </div>
          <img src={Tokyo.src} alt="Tokyo" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={NagsheRostam.src} alt="TakhteJamshid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MasjedSheykhLotfolah.src} alt="MasjedSheykhLotfolah" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ArgBam.src} alt="ArgBam" />
        </SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
