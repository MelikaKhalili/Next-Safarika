"use client";
import { Button, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import "./toursales.css";
export default function Toursales() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="!border-2 !border-gray-200 px-6 py-4  rounded-xl flex flex-col gap-4">
      <h1>یزدگردی vip و آفرود کاراکال ۱۰ تا ۱۲ اردیبهشت</h1>
      <p>(شناسه تور: 3009101)</p>
      <div className="!border-b-2 !border-b-gray-300 my-4"></div>
      <div className="flex justify-between">
        <span>قیمت برای هر نفر</span>
        <p className="pt-8">۴٬۲۰۰٬۰۰۰ تومان</p>
      </div>
      <p>تعداد مسافر :</p>
      <div className="relative flex items-center w-full">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md absolute !right-14 z-10"
        >
          <LuMinus size={"20"} className="text-blue-600" />
        </button>
        <Input
          type="number"
          value={quantity}
          readOnly
          className="text-center w-16 border border-gray-300 rounded-md"
        />
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md absolute !left-14 z-10"
        >
          <FiPlus size={"20"} className="text-blue-600" />
        </button>
      </div>
      <div>
        <p>نوع اقامتگاه :</p>
        <Select
          className="block w-full !px-12 py-2 border border-gray-300 rounded-md select-icon-left"
          defaultValue=""
        >
          <option value="" disabled>
            -
          </option>
          <option value="1">یک نفره</option>
          <option value="2">دو نفره</option>
          <option value="3">سه نفره</option>
          <option value="4">چهارنفره</option>
          <option value="5">گروهی</option>
        </Select>
      </div>
      <div>
        <Button
          style={{
            outline: `1px solid var(--color-buttonprimary)`,
            color: "var(--color-buttonprimary)",
            backgroundColor: "white",
          }}
          className="w-full !text-sm hover:!bg-[#1c3879] hover:border-[#1c3879] hover:!text-white hover:!outline-none"
        >
          دریافت کد تخفیف
        </Button>
      </div>
      <div>
        <Button
          style={{
            color: "white",
            backgroundColor: "var(--color-buttonprimary)",
          }}
          width={"full"}
          className="hover:!bg-[#1c3879]"
        >
          رزو تور
        </Button>
      </div>
    </div>
  );
}
