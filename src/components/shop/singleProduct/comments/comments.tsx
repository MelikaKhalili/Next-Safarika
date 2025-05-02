"use client";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

interface Comment {
  id: string;
  Commentator: string;
  Opinion: string;
  rating: number;
  travelDate: string;
}

interface ProductData {
  Comments: Comment[];
}

const CommentsSection = ({ productData }: { productData: ProductData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Usercomments = productData.Comments;

  return (
    <div className="w-full py-8">
      <div className="flex gap-6">
        <div className="flex flex-col justify-center items-center w-[30%] bg-white shadow-lg rounded-xl p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            امتیاز مجری تور
          </h3>
          <div className="w-full bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-4">
              امتیاز تور بر اساس نظرات مسافرهای قبلی:
            </p>
            <div className="space-y-3">
              {[
                "اقامتگاه",
                "حمل‌و‌نقل",
                "وعده‌غذایی",
                "گشت‌ها",
                "لیدر",
                "به صرفه",
              ].map((item) => (
                <div key={item} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{item}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-full bg-amber-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600">4.5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            نظرات کاربران
          </h2>
          <div className="flex gap-4 !my-6">
            {["تمام نظرات", "نظرات مثبت", "نظرات منفی"].map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`!px-8 !py-2 !rounded-2xl transition-all duration-300 text-sm font-medium
                  ${
                    activeIndex === index
                      ? "!bg-[#36A8A3] !text-white !shadow-md"
                      : "!bg-gray-100 !text-gray-700 hover:!bg-gray-200"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {Usercomments?.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 134 134"
                      className="text-gray-400"
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
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-gray-800">
                          {comment.Commentator}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-gray-600">امتیاز:</span>
                          <span className="text-sm font-medium text-amber-500">
                            {comment.rating} از 5
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        تاریخ سفر: {productData.StartTravel}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">{comment.Opinion}</p>

                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#36A8A3] transition-colors">
                        <AiOutlineLike className="text-lg" />
                        <span>پسندیدم</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors">
                        <AiOutlineDislike className="text-lg" />
                        <span>نپسندیدم</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
