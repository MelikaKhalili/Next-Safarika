"use client";
import BrandLogo from "@/assets/images/BrandLogo.jpg";
import SearchLogo from "@/assets/images/iconSearch.png";
import telePhoneLogo from "@/assets/images/telePhoneLogo.png";
import cartHoveredLogo from "@/assets/svgs/cartHoveredLogo.svg";
import cartLogo from "@/assets/svgs/cartLogo.svg";
import userLogoBlack from "@/assets/svgs/userLogoBlack.svg";
import userLogoWhite from "@/assets/svgs/userLogoWhite.svg";
import { Button, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ShopPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex items-center fixed p-4 gap-15 shadow-md w-full">
      <div className="flex gap-4 items-center">
        <Image
          className="w-12 h-12 rounded-md"
          src={BrandLogo}
          alt="BrandLogo"
        />
        <p className="text-xl font-bold bg-gradient-to-l from-blue-900 to-green-200 bg-clip-text text-transparent">
          سفریکا
        </p>
      </div>
      <div className="flex gap-10">
        <button className="cursor-pointer" onClick={() => toggleAccordion(0)}>
          تور داخلی
        </button>
        <button className="cursor-pointer" onClick={() => toggleAccordion(1)}>
          تور خارجی
        </button>
        <button className="cursor-pointer" onClick={() => toggleAccordion(2)}>
          ویزا
        </button>
        <button className="cursor-pointer">بلیط اتوبوس</button>
      </div>
      {/* آکاردیون */}
      {activeIndex === 0 && (
        <div className="accordion-content absolute right-48 top-20 bg-red-500 w-[80%] h-96 border-br-[10px]">
          <p>محتوای تور داخلی</p>
        </div>
      )}
      {activeIndex === 1 && (
        <div className="accordion-content">
          <p>تور خارجی</p>
        </div>
      )}
      {activeIndex === 2 && (
        <div className="accordion-content">
          <p>ویزا</p>
        </div>
      )}
      <div className="relative flex justify-center items-center">
        <Image
          className="absolute right-2 z-10"
          src={SearchLogo}
          alt="Search Logo"
          width={18}
          height={18}
        />
        <Input
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
          _hover={{
            bg: "white",
          }}
        />
      </div>
      <div className="flex justify-center items-center gap-1">
        <p>021-44451218</p>
        <Image className="w-6" src={telePhoneLogo} alt="telePhoneLogo" />
      </div>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex justify-center items-center"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHoveredCart ? 1 : 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          fontSize="sm"
          bg="white"
          _hover={{
            bg: "#48D1CC",
            textColor: "white",
            boxShadow: "lg",
          }}
        >
          <Image
            className="w-5"
            src={isHovered ? userLogoWhite : userLogoBlack}
            alt="cartLogo"
          />
          ورود / عضویت
        </Button>
      </motion.div>
      <motion.div
        onMouseEnter={() => setIsHoveredCart(true)}
        onMouseLeave={() => setIsHoveredCart(false)}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHoveredCart ? 1 : 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className="w-7 cursor-pointer"
          src={isHoveredCart ? cartHoveredLogo : cartLogo}
          alt="cartLogo"
        />
      </motion.div>
    </div>
  );
}
