"use client";
import AmazingDicsount from "@/assets/svgs/AmazingDicsount.svg";
import { getFilteredProducts } from "@/components/shared/productcart/FilteredProducts";
import ProductCard from "@/components/shared/productcart/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./Discount.css";

export default function DiscountLimit() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [timers, setTimers] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const testfilter = "تور شمال";
      const data = await getFilteredProducts("Category", testfilter);
      setFilteredProducts(data);

      const initialTimers = {};

      data.forEach((product: { id: string | number }, index: number) => {
        let duration = 0;

        if (index === 0) {
          duration = 6 * 60 * 60 * 1000;
        } else if (index === 1) {
          duration = 21 * 60 * 60 * 1000;
        } else if (index === 2) {
          duration = 2 * 60 * 60 * 1000;
        } else {
          duration = 3 * 60 * 60 * 1000;
        }

        initialTimers[product.id] = duration;
      });

      setTimers(initialTimers);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = {};

        Object.keys(prevTimers).forEach((productId) => {
          const newTime = prevTimers[productId] - 1000;
          updatedTimers[productId] = newTime > 0 ? newTime : 0;
        });

        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (splide) => {
    setActiveSlide(splide.index);
  };

  return (
    <div className="containerDiscountlimit w-[100%] flex gap-8 p-12 rounded-xl">
      <div className="flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center z-30">
          <div className="flex justify-center items-center gap-4">
            <MdOutlineTravelExplore className="!text-2xl !text-white" />
            <h1 className="!text-xl !font-bold !text-white z-[99]">
              پیشنهاد شگفت انگیز ما
            </h1>
          </div>
        </div>
        <div>
          <p className="!text-md !text-white">تور های لحظه اخری سفریکا</p>
        </div>
        <div>
          <Image src={AmazingDicsount} alt="AmazingDicsount" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="#" className="bg-[#ef5662] !text-white">
            مشاهده همه
          </a>
          <GrPrevious className="!text-white !text-md" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 z-[99] w-[100%]">
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            rewind: true,
            rewindSpeed: 1000,
            pagination: false,
            arrows: true,
            classes: {
              arrows: "splide__arrows custom-arrows",
              arrow: "splide__arrow custom-arrow",
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
            type: "slide",
            drag: true,
            snap: true,
            autoplay: false,
            interval: 300,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: false,
            lazyLoad: "nearby",
            preloadPages: 1,
            keyboard: true,
            direction: "rtl",
            width: "100%",
            height: "100%",
            focus: "center",
            trimSpace: true,
            updateOnMove: true,
            throttle: 300,
            waitForTransition: true,
            speed: 400,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            dragMinThreshold: {
              mouse: 4,
              touch: 10,
            },
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
          aria-label="تورهای تخفیف‌دار"
          className="!py-6 w-full"
          onMove={handleSlideChange}
        >
          {filteredProducts.length > 0 &&
            filteredProducts.map((product, index) => (
              <SplideSlide key={product.id}>
                <div
                  className={`card ${index === activeSlide ? "active" : ""}`}
                >
                  <ProductCard
                    product={product}
                    timer={timers[product.id]}
                    variant="discount"
                  />
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
}
