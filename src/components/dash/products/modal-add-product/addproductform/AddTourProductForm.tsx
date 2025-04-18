import { Input } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AddProductFormProps } from "../../types";
import UploadImage from "../uploadimage/UploadImage";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
export default function AddTourProductForm({
  setIsOpenModalAddProduct,
}: AddProductFormProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Section>
        <div className="space-y-4">
          <div>
            <label htmlFor="tourTitle" className="block text-right">
              عنوان تور
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="tourTitle"
              type="text"
              size="sm"
            />
          </div>
          <div>
            <label htmlFor="tourDuration" className="block text-right">
              مدت زمان تور
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="tourDuration"
              type="text"
              size="sm"
            />
          </div>
          <div>
            <label htmlFor="tourPrice" className="block text-right">
              هزینه سفر
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="tourPrice"
              type="text"
              size="sm"
            />
          </div>
          <div>
            <label htmlFor="tourLeader" className="block text-right">
              تورلیدر
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="tourLeader"
              type="text"
              size="sm"
            />
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="departureLocation" className="block text-right">
                مبدا
              </label>
              <Input
                className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
                id="departureLocation"
                type="text"
                size="sm"
              />
            </div>
            <div>
              <label htmlFor="destinationLocation" className="block text-right">
                مقصد
              </label>
              <Input
                className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
                id="destinationLocation"
                type="text"
                size="sm"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="departureTime" className="block text-right">
                ساعت حرکت
              </label>
              <Input
                className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
                id="departureTime"
                type="text"
                size="sm"
              />
            </div>
            <div>
              <label htmlFor="arrivalTime" className="block text-right">
                ساعت احتمالی رسیدن
              </label>
              <Input
                className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
                id="arrivalTime"
                type="text"
                size="sm"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="space-y-4">
          <UploadImage />
          <div>
            <label htmlFor="travelVehicle" className="block text-right">
              وسیله سفر
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="travelVehicle"
              type="text"
              size="sm"
            />
          </div>
          <div>
            <label htmlFor="tourCapacity" className="block text-right">
              تعداد نفرات
            </label>
            <Input
              className="!border-2 !border-[#1f4b74] !rounded-md focus:ring-4 focus:ring-[#1f4b74] focus:outline-none hover:border-[#2c3e50] hover:shadow-lg"
              id="tourCapacity"
              type="text"
              size="sm"
            />
          </div>
          <div className="flex  !mt-10  justify-end gap-12 ">
            <button
              onClick={() => setIsOpenModalAddProduct(false)}
              className="!bg-gray-300 !px-4 !py-2 rounded !border-1 !border-blue-900"
            >
              بازگشت
            </button>
            <button className="!bg-purple-800 !text-white !border-1 !border-blue-900 !px-4 !py-2 rounded">
              افزودن محصول
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
