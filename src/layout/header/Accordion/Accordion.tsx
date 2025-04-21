import IranMap from "@/components/shared/IranMap/IranMap";
import { provinces } from "@/components/shared/IranMap/provinces ";
import WorldMap from "@/components/shared/WorldMap/WorldMap";
import { Continents } from "@/components/shared/WorldMap/provinces";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import "./Accordion.css";

interface IProps {
  activeIndex: null;
  isHoveredBtn0: boolean;
  setActiveSection: Dispatch<SetStateAction<"destination" | "category" | null>>;
  setIsHoverDestination: Dispatch<SetStateAction<Boolean | null>>;
  isHoverDestination: Boolean | null;
  setIsHoverCategory: Dispatch<SetStateAction<boolean>>;
  isHoverCategory: boolean;
  activeSection: "destination" | "category" | null;
  setHoveredId: Dispatch<SetStateAction<string | null>>;
  isHoveredBtn1: boolean;
  isHoveredBtn2: boolean;
  hoveredId: string | null;
  setActiveIndex: Dispatch<SetStateAction<null>>;
}

export default function Accordion({
  activeIndex,
  isHoveredBtn0,
  setActiveSection,
  setIsHoverDestination,
  isHoverDestination,
  setIsHoverCategory,
  isHoverCategory,
  activeSection,
  setHoveredId,
  isHoveredBtn1,
  isHoveredBtn2,
  hoveredId,
  setActiveIndex,
}: IProps) {
  return (
    <div>
      {(activeIndex === 0 || activeIndex === 1 || activeIndex === 2) && (
        <div
          className="fixed top-20 inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          onClick={() => setActiveIndex(null)}
        />
      )}

      {activeIndex === 0 || isHoveredBtn0 ? (
        <div
          className="accordion-content absolute right-34 top-20 bg-white w-[80%] h-96 rounded-br-[10px] rounded-bl-[10px] shadow-md z-[9999] !border-2 
        !border-t-gray-300"
        >
          <div className="flex gap-8 p-4">
            <button
              onClick={() => setActiveSection("destination")}
              className="cursor-pointer relative"
              onMouseEnter={() => setIsHoverDestination(true)}
              onMouseLeave={() => setIsHoverDestination(null)}
            >
              مقصد ها
              <motion.span
                initial={{ width: 0, right: 0, opacity: 0 }}
                animate={
                  isHoverDestination
                    ? { width: "100%", right: 0, opacity: 1 }
                    : { width: 0, left: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-10 left-0 h-[2px] bg-blue-500 rounded"
              />
            </button>
            <button
              className="cursor-pointer relative"
              onClick={() => setActiveSection("category")}
              onMouseEnter={() => setIsHoverCategory(true)}
              onMouseLeave={() => setIsHoverCategory(false)}
            >
              دسته بندی ها
              <motion.span
                initial={{ width: 0, right: 0, opacity: 0 }}
                animate={
                  isHoverCategory
                    ? { width: "100%", right: 0, opacity: 1 }
                    : { width: 0, left: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-10 left-0 h-[2px] bg-blue-500 rounded"
              />
            </button>
            <button>همه تور های داخلی</button>
          </div>
          <div className="!border-1"></div>
          <section className="max-h-[300px] overflow-y-auto">
            {activeSection === "destination" && (
              <ul className="category-list grid grid-cols-4 relative">
                {provinces.map((province: any, index) => (
                  <div key={province.id || index} className="col-span-1">
                    <li className="category category-item">
                      {province.cities?.length > 0 && (
                        <ul className="sub-category-list">
                          <div className="absolute top-[-10px] w-[380px] translate-x-1/2 right-1/2 !z-[-999]">
                            <IranMap
                              hoveredProvinceId={hoveredId}
                              onProvinceHover={setHoveredId}
                            />
                          </div>
                          {province.cities.map((city: string, i: number) => (
                            <li
                              key={i}
                              className="sub-category-item"
                              onMouseEnter={() => setHoveredId(province.id)}
                              onMouseLeave={() => setHoveredId(null)}
                            >
                              <a
                                href="#"
                                className="block w-full hover:!bg-blue-200 p-2"
                              >
                                {city}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </section>
          <section className="max-h-[300px] overflow-y-auto py-4">
            {activeSection === "category" && (
              <div
                className=""
                style={{
                  backgroundImage: "url(${PerspoliceImage})",
                }}
              >
                <ul className="grid grid-cols-2 gap-4">
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      آب بازی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      آفرود
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      جنگلی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      جنوب
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      رفتینگ
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      ساحلی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      شمال
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      طبیعت گردی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      کمپینگ
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      کوهنوردی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      کویری
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      ماجراجویانه
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      ماشین شخصی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      نجومی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      نوروزی
                    </a>
                  </li>
                  <li className="w-full hover:bg-blue-200">
                    <a className="p-4" href="#">
                      یک روزه
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </section>
        </div>
      ) : null}

      {activeIndex === 1 || isHoveredBtn1 ? (
        <div
          className="accordion-content absolute right-34 top-20 bg-white w-[80%] h-96 rounded-br-[10px] rounded-bl-[10px] shadow-md z-[9999] !border-2 
        !border-t-gray-300"
        >
          <section>
            <div className="p-2">
              <a href="#" className="">
                همه تور های خارجی
              </a>
            </div>
            <div className="!border-1 !border-gray-300"></div>
            <ul className="category-list grid grid-cols-2 relative max-h-[320px] overflow-y-auto overflow-x-hidden">
              {Continents.filter(
                (Continent) =>
                  Continent.name === "Macedonia" ||
                  Continent.name === "Marshall Islands" ||
                  Continent.name === "Spain" ||
                  Continent.name === "North Korea" ||
                  Continent.name === "South Korea" ||
                  Continent.name === "Australia" ||
                  Continent.name === "Philippines" ||
                  Continent.name === "India" ||
                  Continent.name === "Taiwan" ||
                  Continent.name === "Japan" ||
                  Continent.name === "Madagascar" ||
                  Continent.name === "Turkey" ||
                  Continent.name === "Italy" ||
                  Continent.name === "Netherlands" ||
                  Continent.name === "Finland" ||
                  Continent.name === "Egypt" ||
                  Continent.name === "Algeria" ||
                  Continent.name === "Denmark" ||
                  Continent.name === "Germany" ||
                  Continent.name === "Christmas Island" ||
                  Continent.name === "Cuba"
              ).map((ContinentItem, index) => (
                <div key={ContinentItem.id || index} className="col-span-1">
                  <li className="category category-item">
                    {ContinentItem.cities?.length! > 0 && (
                      <ul className="sub-category-list">
                        <div className="absolute top-[-10px] w-[380px] translate-x-1/2 right-1/2 !z-10">
                          <WorldMap
                            hoveredProvinceId={hoveredId}
                            onProvinceHover={setHoveredId}
                          />
                        </div>
                        {ContinentItem.cities?.map((city, i) => (
                          <li
                            key={i}
                            className="sub-category-item relative z-[20]"
                            onMouseEnter={() => setHoveredId(ContinentItem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                          >
                            <a
                              href="#"
                              className="block w-full hover:!bg-blue-200 hover:!border-l-blue-200 px-4 py-[4px]"
                            >
                              {city}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </section>
        </div>
      ) : null}

      {activeIndex === 2 || isHoveredBtn2 ? (
        <div
          className="accordion-content absolute right-34 top-20 bg-white w-[80%] h-96 rounded-br-[10px] rounded-bl-[10px] shadow-md z-[9999] !border-2 
        !border-t-gray-300"
        >
          <ul className="">
            <li className="!p-4">
              <a href="">انواع ویزا</a>
            </li>
            <div className="!border-1 !border-gray-300"></div>
            <div className="grid grid-cols-3 py-6 items-stretch">
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-gray-700 !px-4">
                  کانادا
                </h3>
                <div className="flex flex-col gap-3 h-52 !border-l-1 !border-l-gray-300">
                  <ul className="flex flex-col gap-1 text-sm text-gray-600">
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 huseState:!bg-blue-100"
                      >
                        اسکیل ورکر کانادا
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        پیکاپ ویزا کانادا
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        جاب آفر کانادا
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-gray-700">
                  آمریکا
                </h3>
                <div className="flex flex-col gap-3 h-52 !border-l-1 !border-l-gray-300 ">
                  <ul className="flex flex-col gap-1 text-sm text-gray-600">
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        ثبت نام لاتاری
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        وقت سفارت آمریکا
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        ویزای تحصیلی آمریکا
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold text-gray-700">
                  انگلستان
                </h3>
                <div className="flex flex-col gap-3 h-full  min-h-screen">
                  <ul className="flex flex-col gap-1 text-sm text-gray-600">
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        وقت سفارت انگلستان
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block w-fit hover:!w-full text-right px-3 py-1  transition-all duration-200 hover:!bg-blue-100"
                      >
                        ویزای تحصیلی انگلستان
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
