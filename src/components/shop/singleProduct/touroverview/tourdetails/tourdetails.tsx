"use client";
import { useEffect, useRef, useState } from "react";

export default function Tourdetails({ productData }) {
  const stickyRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    "زمان بندی",
    "گشت ها",
    "خدمات",
    "اقامتگاه",
    "نقشه",
    "امکانات رفاهی مقصد",
    "لوازم مورد نیاز سفر",
    "توضیحات شرایط سفر",
    "نظرات کاربران",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-1"></div>
      <div
        ref={stickyRef}
        className={`sticky top-20 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white py-4 px-4 shadow-md rounded-br-2xl rounded-bl-2xl"
            : "bg-white"
        }`}
      >
        <ul className="flex gap-10 text-sm px-6 py-4 border-b border-gray-200">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setActiveIndex(index)}
                className={`relative inline-block text-gray-700 hover:text-black transition ${
                  !isSticky ? "my-6" : ""
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-[-18px] h-[2px] w-full !bg-blue-500 transform transition-transform duration-300 ${
                    isSticky && activeIndex === index
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
