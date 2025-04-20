"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Excursions() {
  const [isOpenFirstDay, setIsOpenFirstDay] = useState(false);
  const [isOpenSecondDay, setIsOpenSecondDay] = useState(false);

  const toggleAll = () => {
    if (isOpenFirstDay && isOpenSecondDay) {
      setIsOpenFirstDay(false);
      setIsOpenSecondDay(false);
    } else {
      setIsOpenFirstDay(true);
      setIsOpenSecondDay(true);
    }
  };

  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">گشت ها</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi dolore
        culpa fugiat provident corrupti. Beatae error nobis mollitia ducimus
        quia minus rem! Recusandae, quod sequi, dignissimos accusantium earum
        quos molestiae harum atque voluptas qui reprehenderit? Obcaecati minima
        culpa ea omnis enim, dolores tenetur praesentium fuga? Ut consectetur
        consequuntur odio rerum molestiae animi eius impedit error, omnis,
        possimus, atque sapiente iusto. Molestias nemo necessitatibus asperiores
        ipsum reprehenderit illum vero deserunt. Laboriosam laborum aspernatur
        sequi laudantium cumque. Natus distinctio cum voluptatem! Itaque est
        accusamus architecto earum, vel ullam excepturi laboriosam accusantium
        quam suscipit quibusdam libero fuga nihil, error eligendi, dolore
        voluptatibus. Placeat esse nesciunt, aliquid iure hic recusandae sequi
        quia rerum sit ex ipsam excepturi dolores. Soluta quasi corporis, velit
        blanditiis consequatur esse که distinctio voluptates optio magni totam
        eaque dolore obcaecati iste، aliquid eligendi، tempore sint fugiat enim
        quae doloribus ex?
      </p>
      <div className="!bg-gray-300 w-full  rounded-xl p-6 mt-12 ">
        <div className="flex justify-between ">
          <h1 className="!font-bold !text-[20px]">برنامه سفر :</h1>
          <button onClick={toggleAll} className="!text-[#26b9b0]">
            {isOpenFirstDay && isOpenSecondDay
              ? "بستن همه -"
              : "باز کردن همه  +"}
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 mt-2 cursor-pointer">
          <div
            onClick={() => setIsOpenFirstDay(!isOpenFirstDay)}
            className="flex items-center w-full relative"
          >
            <div className="w-full bg-white rounded-md border-b-2  px-4 py-3 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span>روز اول</span>
                <RiArrowDropDownLine
                  className={`transition-transform duration-300 ${
                    isOpenFirstDay ? "rotate-180" : ""
                  }`}
                  size={30}
                />
              </div>

              {isOpenFirstDay && (
                <div className="mt-3 text-sm text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Adipisci, voluptate.
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => setIsOpenSecondDay(!isOpenSecondDay)}
            className="flex w-full relative cursor-pointer"
          >
            <div className="w-full bg-white rounded-md px-4 py-3 border-b-2 ">
              <div className="flex items-center justify-between">
                <span>روز دوم</span>
                <RiArrowDropDownLine
                  className={`transition-transform duration-300 ${
                    isOpenSecondDay ? "rotate-180" : ""
                  }`}
                  size={30}
                />
              </div>
              {isOpenSecondDay && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, in?
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
