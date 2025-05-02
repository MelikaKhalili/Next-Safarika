"use client";
import { searchToursByTitle } from "@/api/userApi";
import SearchLogo from "@/assets/images/iconSearch.png";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { useDebouncedCallback } from "use-debounce";
export default function Search() {
  const [searchProduct, setSearchProduct] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const debounced = useDebouncedCallback(async (value) => {
    if (!value) return setSearchProduct([]);
    const data = await searchToursByTitle(value);
    setSearchProduct(data);
  }, 400);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsOpenModal(true);
    }
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <>
      <div className="relative flex flex-col justify-center items-center"></div>

      {isOpenModal && (
        <>
          <div className="fixed inset-0 bg-black/40  z-30"></div>

          <div className="absolute top-16 z-40 bg-white right-[46%] w-72 h-80 py-2 px-4 rounded-md shadow-md overflow-y-auto">
            {searchProduct.map((item) => (
              <div key={item.id}>
                <div className="w-full flex items-center gap-4 hover:bg-[#e5faf8] hover:rounded-md p-2 cursor-pointer">
                  <img
                    className="w-12 !h-12 rounded-md"
                    src={item.Image[0]}
                    alt={item.TourName}
                  />
                  <p className="text-md font-normal">{item.Destination}</p>
                </div>
              </div>
            ))}
            <div className="!my-4 !border-t-2 !border-t-gray-300 !h-1 !w-full"></div>
            <div className="flex gap-1 w-full items-center !text-gray-400 ">
              <svg
                fill="#cbd5e0"
                height="15px"
                width="15px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.4 488.4"
                stroke="#cbd5e0"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p>جست و جوی "{inputValue}"</p>
            </div>
          </div>
        </>
      )}

      <div className="fixed top-5 left-[45%] transform -translate-x-1/2 z-50">
        <div className="relative w-fit ">
          <div className="flex justify-center items-center ">
            <Input
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                const val = e.target.value;
                setInputValue(val);
                console.log(val);
                debounced(val);
                setIsOpenModal(true);
              }}
              value={inputValue}
              bg="#f9f9f9"
              placeholder="جست و جو"
              size="md"
              width="300px"
              height="40px"
              borderRadius="lg"
              borderColor="teal.500"
              focusBorderColor="teal.300"
              _placeholder={{ fontSize: "15px", color: "#bfbfbf" }}
              pr="30px"
              _hover={{ bg: "white" }}
            />
            {inputValue ? (
              <div
                onClick={() => {
                  setInputValue("");
                  setIsOpenModal(false);
                  setSearchProduct([]);
                }}
                className="absolute left-4 z-10"
              >
                <RxCross2 className="!text-xl !text-red-600 cursor-pointer" />
              </div>
            ) : (
              <Image
                className="absolute right-2 top-2.5 z-10"
                src={SearchLogo}
                alt="Search Logo"
                width={18}
                height={18}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
