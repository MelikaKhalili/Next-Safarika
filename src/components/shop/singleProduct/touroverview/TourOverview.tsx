"use client";
import { BsBusFrontFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiAges, GiMountainClimbing } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { LuCalendarDays, LuClock9 } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { TbHome } from "react-icons/tb";

interface ProductData {
  TourName?: string;
  Pres?: string | number;
  Tourleader?: string;
  Star?: string;
  classTour?: string;
  Los?: string;
  startTravelDataTime?: string;
  Origin?: string;
  Destination?: string;
  AccomType?: string;
  Transportation?: string;
  Agegroup?: string;
  People?: string;
  Difficulty?: string;
}

interface TourOverviewProps {
  productData: ProductData;
}

export default function TourOverview({ productData }: TourOverviewProps) {
  return (
    <div className="">
      <h1 className="!font-bold">{productData?.TourName}</h1>
      <div className="flex  justify-between text-sm mb-4">
        <div>
          <p>مجری تور : {productData?.Pres || 888}</p>
          <span>تور لیدر : {productData?.Tourleader}</span>
        </div>
        <div>
          <p>امتیاز تور : {productData?.Star}</p>
          <p>کلاس تور : {productData?.classTour || "استاندارد پلاس"}</p>
        </div>
      </div>
      <div className="!border-t-1 !border-t-gray-300"></div>
      <div className="flex flex-col gap-5 my-3">
        <div className="flex !items-center gap-1">
          <LuClock9 />
          <p>مدت سفر : {productData?.Los || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <LuCalendarDays />
          <p>تاریخ رفت : {productData?.startTravelDataTime || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <CiLocationOn />
          <p> مبدا : {productData?.Origin || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <GrMapLocation />
          <p>مقصد : {productData?.Destination || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <TbHome />
          <p>نوع اقامت : {productData?.AccomType || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <BsBusFrontFill />
          <p>حمل نقل : {productData?.Transportation || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <GiAges />
          <p>رده سنی : {productData?.Agegroup || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <MdGroups />
          <p>اندازه گروه : {productData?.People || ""}</p>
        </div>
        <div className="flex !items-center gap-1">
          <GiMountainClimbing />
          <p>درجه سختی : {productData?.Difficulty || ""}</p>
        </div>
      </div>
      <div className="flex text-[10px] gap-4">
        <button className="!bg-gray-200 rounded-xl !py-1 !px-3">
          تور ماجراجویانه
        </button>
        <button className="!bg-gray-200 rounded-xl !py-1 !px-3">
          تور طبیعت گردی
        </button>
        <button className="!bg-gray-200 rounded-xl !py-1 !px-3">
          تور آفرود
        </button>
        <button className="!bg-gray-200 rounded-xl !py-1 !px-3">
          تور کویری
        </button>
        <button className="!bg-gray-200 rounded-xl !py-1 !px-3">
          تور نجومی
        </button>
      </div>
    </div>
  );
}
