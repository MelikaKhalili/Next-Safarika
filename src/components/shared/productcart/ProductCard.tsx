"use client";
import Bus from "@/assets/images/iconBus.png";
import Train from "@/assets/images/iconTrain.png";
import StarIcon from "@/assets/images/Star.png";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StandardIcon from "../../../assets/images/StandardIcon.png";
import "./ProductCard.css";
interface Product {
  Category: string;
  id: string;
  TourName: string;
  Price: string;
  NewPrice?: string;
  Image: string[];
  Los: string;
  Pres: string;
  Star: string;
  Moveday: string;
  gridRows?: number;
  Destination?: string;
}

type VariantType = "discount" | "normal";

interface ProductCardProps {
  product: Product;
  gridRows?: number;
  variant: VariantType;
  timer?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  gridRows,
  timer,
  variant = "normal",
}) => {
  if (!product || !product.id) {
    console.error("Invalid product data:", product);
    return null;
  }

  const renderTourIcon = (Category: string, Destination?: string) => {
    if (Destination === "مشهد") {
      return <Image src={Train} alt="Train" width={20} height={20} />;
    }
    if (Category === "تور خارجی") {
      return (
        <svg
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>airplane</title>
            <desc>Created with Sketch Beta.</desc>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set"
                transform="translate(-308.000000, -307.000000)"
                fill="#000000"
              >
                <path
                  d="M337.854,311.163 L330.402,318.642 L334.908,331.037 C335.13,331.747 334.992,332.627 334.705,332.914 C333.89,333.73 333.309,333.342 333,333 L325.795,323.266 L317.819,331.27 L319.255,336.6 C318.688,336.032 315.38,331.602 315.301,331.521 C315.248,331.469 310.896,328.225 310.427,327.753 L315.538,329.133 L323.665,321.152 L314,314 C313.723,313.752 313.358,313.02 314.104,312.271 C314.392,311.984 315.262,311.897 315.97,312.12 L328.311,316.592 L335.864,309.175 C336.392,308.647 337.425,308.701 337.888,309.164 C338.35,309.627 338.382,310.636 337.854,311.163 Z M339.207,307.82 C337.961,306.57 335.771,306.863 334.518,308.119 L328.141,314.481 L316.313,310.061 C315.18,309.768 314.039,309.389 312.634,310.798 C311.917,311.516 310.427,313.01 312.634,315.221 L320.744,321.861 L315.467,327.127 L310.543,325.896 C309.813,325.708 309.321,325.855 308.946,326.269 C308.757,326.505 307.386,327.521 308.342,328.479 L314.067,332.933 L318.521,338.658 C319.213,339.352 319.856,338.919 320.735,338.084 C321.292,337.526 321.172,337.239 321.004,336.426 L319.892,331.536 L325.133,326.277 L331.763,334.389 C333.969,336.6 335.46,335.105 336.177,334.389 C337.583,332.979 337.205,331.837 336.912,330.702 L332.529,318.854 L338.88,312.481 C340.133,311.226 340.454,309.069 339.207,307.82 Z"
                  id="airplane"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      );
    } else if (product.Category === "استاندارد تور") {
      return (
        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488 488"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g transform="translate(0 -540.36)">
              <g>
                <g>
                  <path d="M436.8,686.76H478c5.5,0,10-4.5,10-10v-50.7c0-5.5-4.5-10-10-10h-41.2c-5.5,0-10,4.5-10,10v40.7h-10.5v-61.5 c0-3.3-1.6-6.4-4.4-8.3l-30.5-20.8c-1.7-1.1-3.6-1.7-5.6-1.7H112.1c-2,0-4,0.6-5.6,1.7L76,596.96c-2.7,1.9-4.4,5-4.4,8.3v61.5 H61.1v-40.7c0-5.5-4.5-10-10-10H10c-5.5,0-10,4.5-10,10v50.7c0,5.5,4.5,10,10,10h31.3h9.9h20.5v26.1l-26,17 c-2.8,1.8-4.5,5-4.5,8.4v62.3H30.6c-5.5,0-10,4.5-10,10v40.7H10c-5.5,0-10,4.5-10,10v41.5c0,5.5,4.5,10,10,10h41.1v71.5 c0,5.5,4.5,10,10,10H132c5.5,0,10-4.5,10-10v-71.5h204v71.5c0,5.5,4.5,10,10,10h70.9c5.5,0,10-4.5,10-10v-71.5H478 c5.5,0,10-4.5,10-10v-41.5c0-5.5-4.5-10-10-10h-10.6v-40.7c0-5.5-4.5-10-10-10h-10.6v-62.3c0-3.4-1.7-6.5-4.5-8.4l-26-17v-26.1 H436.8z M446.8,635.96H468v30.7h-21.2V635.96z M41.2,666.76H20v-30.7h21.2V666.76z M115.2,594.56h257.6l23.6,16v97.7H190.6 l26.5-21.5H305c5.5,0,10-4.5,10-10s-4.5-10-10-10H173.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h12.2l-26.5,21.5H91.6v-97.7h0 L115.2,594.56z M122,974.26H71.1v-61.5H122V974.26z M416.9,974.26H366v-61.5h50.9V974.26z M468,871.26v21.5h-41.1H356H132H61.1 H20v-21.5h10.6h426.8H468z M426.8,743.66v66.9c0,5.5,4.5,10,10,10h10.6v30.7H40.6v-30.7h10.6c5.5,0,10-4.5,10-10v-66.9l23.5-15.4 h318.7L426.8,743.66z"></path>
                  <path d="M116.7,759.26c-19.4,0-35.1,16.1-35.1,35.9c0,19.4,15.8,35.1,35.1,35.1c19.8,0,35.9-15.8,35.9-35.1 C152.6,774.96,136.8,759.26,116.7,759.26z M116.7,810.26c-8.2,0-15.1-6.9-15.1-15.1c0-8.8,6.8-15.9,15.1-15.9 c8.9,0,15.9,7,15.9,15.9C132.6,803.46,125.5,810.26,116.7,810.26z"></path>
                  <path d="M183,748.96c-5.5,0-10,4.5-10,10v61.5c0,5.5,4.5,10,10,10s10-4.5,10-10v-61.5C193,753.46,188.5,748.96,183,748.96z"></path>
                  <path d="M223.4,748.96c-5.5,0-10,4.5-10,10v61.5c0,5.5,4.5,10,10,10s10-4.5,10-10v-61.5C233.4,753.46,228.9,748.96,223.4,748.96z "></path>
                  <path d="M264.6,748.96c-5.5,0-10,4.5-10,10v61.5c0,5.5,4.5,10,10,10s10-4.5,10-10v-61.5C274.6,753.46,270.1,748.96,264.6,748.96z "></path>
                  <path d="M305,748.96c-5.5,0-10,4.5-10,10v61.5c0,5.5,4.5,10,10,10s10-4.5,10-10v-61.5C315,753.46,310.5,748.96,305,748.96z"></path>
                  <path d="M371.3,759.26c-20.1,0-35.9,15.8-35.9,35.9c0,19.4,16.1,35.1,35.9,35.1c19.4,0,35.1-15.8,35.1-35.1 C406.4,775.36,390.7,759.26,371.3,759.26z M371.3,810.26c-8.8,0-15.9-6.8-15.9-15.1c0-8.9,7-15.9,15.9-15.9 c8.3,0,15.1,7.1,15.1,15.9C386.4,803.36,379.5,810.26,371.3,810.26z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    } else if (product.Category === "تور داخلی") {
      return (
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>car_front_view [#616]</title>
            <desc>Created with Sketch.</desc>
            <defs> </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -5479.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M89,5335 L89,5335 C88.448,5335 88,5334.552 88,5334 C88,5333.448 88.448,5333 89,5333 C89.552,5333 90,5333.448 90,5334 C90,5334.552 89.552,5335 89,5335 M99,5333 L99,5333 C99.552,5333 100,5333.448 100,5334 C100,5334.552 99.552,5335 99,5335 C98.448,5335 98,5334.552 98,5334 C98,5333.448 98.448,5333 99,5333 M90.602,5321 L97.398,5321 C97.896,5321 98.318,5321.366 98.388,5321.859 L99.694,5331 L88.306,5331 L89.612,5321.859 C89.682,5321.366 90.104,5321 90.602,5321 M104,5328 L104,5328 C104,5327.448 103.552,5327 103,5327 L101.143,5327 L100.245,5320.717 C100.105,5319.732 99.261,5319 98.265,5319 L89.735,5319 C88.739,5319 87.895,5319.732 87.755,5320.717 L86.857,5327 L85,5327 C84.448,5327 84,5327.448 84,5328 C84,5328.552 84.448,5329 85,5329 L86.571,5329 L86.286,5331 L86,5331 C84.895,5331 84,5331.895 84,5333 L84,5335 C84,5336.105 84.895,5337 86,5337 L86,5338 C86,5338.552 86.448,5339 87,5339 L89,5339 C89.552,5339 90,5338.552 90,5338 L90,5337 L98,5337 L98,5338 C98,5338.552 98.448,5339 99,5339 L101,5339 C101.552,5339 102,5338.552 102,5338 L102,5337 C103.105,5337 104,5336.105 104,5335 L104,5333 C104,5331.895 103.105,5331 102,5331 L101.714,5331 L101.429,5329 L103,5329 C103.552,5329 104,5328.552 104,5328"
                    id="car_front_view-[#616]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    } else if (product.Category === "تور شمال") {
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                style={{ fill: "#000000" }}
                d="M30.945,157.865v-45.808c0-4.588-3.719-8.307-8.307-8.307s-8.307,3.719-8.307,8.307v54.115 c0,4.588,3.719,8.307,8.307,8.307h43.83v-16.613H30.945z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M489.817,103.75c-4.588,0-8.307,3.719-8.307,8.307v45.808h-35.996v16.613h44.303 c4.588,0,8.307-3.719,8.307-8.307v-54.115C498.124,107.469,494.405,103.75,489.817,103.75z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M121.816,0c-4.588,0-8.307,3.719-8.307,8.307v33.227h16.613V8.307 C130.123,3.719,126.404,0,121.816,0z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M390.165,0c-4.588,0-8.307,3.719-8.307,8.307v33.227h16.613V8.307 C398.472,3.719,394.754,0,390.165,0z"
              ></path>
            </g>
            <path
              style={{ fill: "#000000" }}
              d="M442.027,46.944c-1.119-9.071-9.492-16.492-18.629-16.492H88.591 c-9.137,0-17.522,7.421-18.629,16.492L49.328,215.804l63.308,121.998h286.716l63.308-121.998L442.027,46.944z"
            ></path>
            <path
              style={{ fill: "#FFFFFF" }}
              d="M439.859,166.174L425.537,48.978c-0.092-0.75-1.393-1.912-2.141-1.912H88.591 c-0.749,0-2.048,1.15-2.139,1.893L72.13,166.174H439.859z"
            ></path>
            <rect
              x="103.501"
              y="375.952"
              style={{ fill: "#000000" }}
              width="304.99"
              height="44.303"
            ></rect>
            <g>
              <path
                style={{ fill: "#000000" }}
                d="M15.348,364.871v130.516c0,9.137,7.476,16.613,16.613,16.613h66c9.137,0,16.613-7.476,16.613-16.613 V364.871H15.348z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M397.414,364.871v130.516c0,9.137,7.476,16.613,16.613,16.613h65.989 c9.137,0,16.613-7.476,16.613-16.613V364.871H397.414z"
              ></path>
            </g>
            <g>
              <circle
                style={{ fill: "#FFFFFF" }}
                cx="154.195"
                cy="240.907"
                r="28.312"
              ></circle>
              <circle
                style={{ fill: "#FFFFFF" }}
                cx="357.788"
                cy="240.907"
                r="28.312"
              ></circle>
            </g>
            <g>
              <path
                style={{ fill: "#000000" }}
                d="M222.018,277.528c-4.588,0-8.307-3.719-8.307-8.307v-56.623c0-4.588,3.719-8.307,8.307-8.307 c4.588,0,8.307,3.719,8.307,8.307v56.623C230.324,273.809,226.605,277.528,222.018,277.528z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M255.991,277.528c-4.588,0-8.307-3.719-8.307-8.307v-56.623c0-4.588,3.719-8.307,8.307-8.307 c4.588,0,8.307,3.719,8.307,8.307v56.623C264.298,273.809,260.579,277.528,255.991,277.528z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M289.965,277.528c-4.588,0-8.307-3.719-8.307-8.307v-56.623c0-4.588,3.719-8.307,8.307-8.307 c4.588,0,8.307,3.719,8.307,8.307v56.623C298.271,273.809,294.552,277.528,289.965,277.528z"
              ></path>
            </g>
            <g>
              <path
                style={{ fill: "#000000" }}
                d="M112.637,315.651l-54.304,22.151L4.029,315.651v-77.696c0-12.183,9.968-22.151,22.151-22.151h23.148 h12.959c12.183,0,24.854,9.592,28.165,21.321L112.637,315.651z"
              ></path>
              <path
                style={{ fill: "#000000" }}
                d="M507.949,237.955l0.011,77.696l-54.304,22.151l-54.304-22.151l22.173-78.526 c3.312-11.729,15.993-21.321,28.176-21.321h12.959h23.137C497.981,215.804,507.949,225.772,507.949,237.955z"
              ></path>
            </g>
            <polygon
              style={{ fill: "#000000" }}
              points="507.96,315.651 4.029,315.651 4.029,375.947 507.971,375.947 "
            ></polygon>
          </g>
        </svg>
      );
    } else if (product.Category === "تور جنوب") {
      return <Image src={Bus} alt="Bus" width={20} height={20} />;
    } else if (product.Category === "تور یک روزه") {
      return <Image src={Bus} alt="Bus" width={20} height={20} />;
    }

    return null;
  };

  const formatTime = (ms: number | undefined) => {
    if (!ms) return "زمان تمام شده";

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const isDiscountVariant = (v: VariantType): v is "discount" =>
    v === "discount";

  return (
    <>
      <Link href={`/products/${product.id}`} passHref>
        {isDiscountVariant(variant) ? (
          <div className="hover:!shadow-2xl !bg-white !h-full rounded-[8px]">
            {product?.Image?.[2] && (
              <img
                className="!h-[180px] w-full object-cover rounded-t-[8px]"
                src={product.Image[2]}
                alt={product.TourName}
              />
            )}
            <div className="!h-full !p-4">
              {timer !== undefined && (
                <div className="flex gap-2 items-center text-xs">
                  {Object.entries(formatTime(timer)).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1">
                      <Input
                        size={"50px"}
                        type="text"
                        value={value}
                        readOnly
                        className="w-[40px] text-center border rounded px-1 py-0.5"
                      />
                      <span>
                        {key === "days"
                          ? "روز"
                          : key === "hours"
                          ? "ساعت"
                          : key === "minutes"
                          ? "دقیقه"
                          : "ثانیه"}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col justify-center items-center">
                <p className="old-price !text-sm">
                  {" "}
                  {Number(product.Price).toLocaleString("fa-IR")} تومان
                </p>
                <p className="new-price !text-sm">
                  {Number(product.Newprice).toLocaleString("fa-IR")} تومان
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap flex-col gap-y-2 !border-1 !border-white rounded-[8px] shadow-md">
            <div
              className={`w-[100%] h-[240px] min-w-[320px] relative overflow-hidden ${
                isDiscountVariant(variant) ? "!border-4 !border-red-700" : ""
              }`}
            >
              {product?.Image?.[2] && (
                <img
                  className="absolute !h-[100%] w-[100%] inset-0 object-cover rounded-[8px] transition-transform duration-500 hover:scale-110"
                  src={product.Image[2]}
                  alt={product.TourName}
                />
              )}
            </div>
            {timer !== undefined && <p>زمان باقی مانده: {formatTime(timer)}</p>}
            <h4 className=" text-center !text-md !font-bold">
              {product.TourName}
            </h4>
            <div className=" p-3 flex flex-col gap-2 ">
              <div className="flex justify-between text-sm">
                <p className="!text-[12px]">{product.Los}</p>
                <p className="!text-[12px] leading-none">
                  مجری تور :&nbsp;{product.Pres}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="leading-none !text-[12px]">
                  {Number(product.Price).toLocaleString("fa-IR")}&nbsp;تومان
                </span>

                <button
                  className="leading-none
  !text-[12px] flex flex-row-reverse gap-1 items-center !px-2 !py-1 rounded-md"
                >
                  {product.Star}
                  <Image className="!w-4 !h-4" src={StarIcon} alt="StarIcon" />
                </button>
              </div>
              <div className="!text-[12px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="black"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p>{product.Moveday}</p>
                </div>

                <div className=" w-5 h-5 icon_box">
                  {renderTourIcon(product.Category, product.Destination)}
                </div>

                <div className="flex items-center gap-2">
                  <p>استاندارد پلاس</p>
                  <Image
                    className="!w-[20px] !h-[20px]"
                    src={StandardIcon}
                    alt="StandardIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default ProductCard;
