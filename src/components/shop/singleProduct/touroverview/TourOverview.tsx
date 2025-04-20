import { BsBusFrontFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiAges, GiMountainClimbing } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { LuCalendarDays, LuClock9 } from "react-icons/lu";
import { MdGroups } from "react-icons/md";
import { TbHome } from "react-icons/tb";

export default function TourOverview() {
  return (
    <div>
      <h1 className="!font-bold">
        یزدگردی vip و آفرود کاراکال ۱۰ تا ۱۲ اردیبهشت
      </h1>
      <div className="flex  justify-between text-sm mb-4">
        <div>
          <p>مجری تور : 666</p>
          <span>تور لیدر : خمان</span>
        </div>
        <div>
          <p>امتیاز تور : 4.6</p>
          <p>کلاس تور : استاندارد پلاس</p>
        </div>
      </div>
      <div className="!border-t-1 !border-t-gray-300"></div>
      <div className="flex flex-col gap-5 my-3">
        <div className="flex !items-center gap-1">
          <LuClock9 />
          <p>مدت سفر : </p>
        </div>
        <div className="flex !items-center gap-1">
          <LuCalendarDays />
          <p>تاریخ رفت :</p>
        </div>
        <div className="flex !items-center gap-1">
          <CiLocationOn />
          <p> مبدا :</p>
        </div>
        <div className="flex !items-center gap-1">
          <GrMapLocation />
          <p>مقصد : </p>
        </div>
        <div className="flex !items-center gap-1">
          <TbHome />
          <p>نوع اقامت : </p>
        </div>
        <div className="flex !items-center gap-1">
          <BsBusFrontFill />
          <p>حمل نقل :</p>
        </div>
        <div className="flex !items-center gap-1">
          <GiAges />
          <p>رده سنی :</p>
        </div>
        <div className="flex !items-center gap-1">
          <MdGroups />
          <p>اندازه گروه :</p>
        </div>
        <div className="flex !items-center gap-1">
          <GiMountainClimbing />
          <p>درجه سختی :</p>
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
