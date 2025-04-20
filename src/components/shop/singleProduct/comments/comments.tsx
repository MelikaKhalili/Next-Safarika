"use client";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const commentsData = [
  {
    userName: "Melika Khalili",
    travelDate: "1403/01/31",
    rating: 4.2,
    reviewText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium dignissimos sed praesentium quos? Quam expedita accusantium numquam aliquam laudantium.",
  },
  {
    userName: "Ali Reza",
    travelDate: "1403/02/01",
    rating: 4.5,
    reviewText:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    userName: "Karen",
    travelDate: "1403/05/01",
    rating: 4.5,
    reviewText:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
  {
    userName: "shirin",
    travelDate: "1403/05/01",
    rating: 4.5,
    reviewText:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  },
];

const CommentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col justify-center items-center w-[30%] h-52 !border-2 !border-amber-300 p-2 rounded-xl text-sm">
        <p>امتیاز مجری تور:</p>
        <div className="!border-1 !border-gray-300 rounded-2xl px-4 py-2">
          <p>امتیاز تور بر اساس نظرات مسافرهای قبلی:</p>
          <div className="flex flex-col">
            <p>اقامتگاه</p>
            <p>حمل‌و‌نقل</p>
            <p>وعده‌غذایی</p>
            <p>گشت‌ها</p>
            <p>لیدر</p>
            <p>به صرفه</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] py-6 px-4 flex flex-col gap-6 text-sm">
        <h1 className="!text-lg !font-bold">نظرات کاربران</h1>
        <div className="flex gap-6">
          {["تمام نظرات", "نظرات مثبت", "نظرات منفی"].map((label, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`!py-2 !px-8 rounded-md transition-all duration-300
              ${
                activeIndex === index
                  ? "!bg-[#36A8A3] !text-white"
                  : "bg-gray-100 text-black"
              }
              hover:!bg-[#48d1cc] hover:!text-white`}
            >
              {label}
            </button>
          ))}
        </div>

        {commentsData.map((comment, index) => (
          <div key={index} className="!border-b-2 !border-b-gray-300 pb-4">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 134 134"
                  className="w-12 h-12"
                >
                  <g clipPath="url(#profile-icon)">
                    <rect
                      width="134"
                      height="134"
                      fill="#CBCBCB"
                      rx="67"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M67 26.8c-14.782 0-26.8 12.03-26.8 26.829 0 14.515 11.34 26.263 26.123 26.771a4.6 4.6 0 0 1 1.241 0h.39499999999999996c14.444-.508 25.784-12.256 25.84-26.772C93.8 38.832 81.783 26.8 67 26.8M105.677 97.715c-21.242-14.153-55.884-14.153-77.278 0-9.67 6.468-15 15.219-15 24.579s5.33 18.035 14.924 24.427C38.982 153.874 52.99 157.45 67 157.45s28.018-3.576 38.677-10.729c9.593-6.468 14.923-15.143 14.923-24.579-.076-9.36-5.33-18.035-14.923-24.427"
                    ></path>
                  </g>
                  <rect
                    width="132"
                    height="132"
                    x="1"
                    y="1"
                    stroke="#CBCBCB"
                    strokeWidth="2"
                    rx="66"
                  ></rect>
                  <defs>
                    <clipPath id="profile-icon">
                      <rect width="134" height="134" fill="#fff" rx="67"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex flex-col text-sm">
                  <p>{comment.userName}</p>
                  <p>{comment.travelDate}</p>
                </div>
                <div className="!border-l-2 !border-l-red-500 h-8"></div>
                <div className="flex flex-col">
                  <p>{comment.rating} از 5</p>
                </div>
                <div className="!border-l-2 !border-l-red-500 h-8"></div>
                <div className="flex flex-row-reverse justify-center items-center outline outline-[var(--color-buttonprimary)] px-4 py-2 rounded-md gap-2">
                  <button className="text-sm cursor-pointer">
                    پیشنهاد میکنم
                  </button>
                  <AiOutlineLike className="cursor-pointer text-lg text-[var(--color-buttonprimary)]" />
                </div>
              </div>
              <div>
                <p>تاریخ سفر: </p>
              </div>
            </div>
            <p>{comment.reviewText}</p>
            <div className="flex flex-col">
              <p>آیا این نظر مورد پسند شما بود؟</p>
              <div className="flex gap-10">
                <div className="flex items-center cursor-pointer">
                  <AiOutlineLike className="text-md" />
                  <p className="text-md">پسندیدم</p>
                </div>
                <div className="flex items-center cursor-pointer">
                  <AiOutlineDislike className="text-md" />
                  <p className="text-md">نپسندیدم</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
