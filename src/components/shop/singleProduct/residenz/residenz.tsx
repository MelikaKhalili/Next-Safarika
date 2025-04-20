"use client";
import Tour2 from "@/assets/images/Paris.jpg";
import Image from "next/image";
import { useState } from "react";
import { IoIosHome } from "react-icons/io";

const images = [
  { src: Tour2, alt: "تور جنوب" },
  { src: Tour2, alt: "تور پاریس" },
  { src: Tour2, alt: "تور جنوب" },
  { src: Tour2, alt: "تور پاریس" },
];

const RoomCard = ({ title }) => (
  <div className="flex flex-col justify-center items-center w-44 h-16 bg-white/60 rounded-md border border-gray-600 relative">
    <p>{title}</p>
    <div className="block !border-b-2 !border-b-gray-300 px-14 h-[2px] my-1 "></div>
    <p>تخت دارد</p>
  </div>
);

const RoomList = ({ roomTypes }) => (
  <div className="bg-gray-100 w-full  rounded-md py-10 px-12 text-md flex flex-col gap-6 overflow-x-auto">
    <span className="">مدل اتاق ها :</span>
    <div className="flex gap-2 w-max">
      {roomTypes.map((type, index) => (
        <RoomCard key={index} title={type} />
      ))}
    </div>
    <span>
      در صورت انتخاب اتاق یک نفره: به ازای هر نفر ۸۰۰٬۰۰۰ تومان دریافت می شود.
    </span>
    <span>
      در صورت انتخاب اتاق دو نفره: به ازای هر نفر ۵۰۰٬۰۰۰ تومان دریافت می شود.
    </span>
    <span>
      در صورت انتخاب اتاق سه نفره: به ازای هر نفر ۲۰۰٬۰۰۰ تومان دریافت می شود.
    </span>
  </div>
);

export default function Residenz() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const roomTypes = [
    "اتاق یک نفره",
    "اتاق دو نفره",
    "اتاق سه نفره",
    "اتاق چهار نفره",
    "اتاق گروهی",
  ];

  const openImageModal = (index: number) => {
    setSelectedImage(index);
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const changeImage = (direction: "next" | "prev") => {
    setSelectedImage((prevIndex) => {
      if (prevIndex === null) return null;
      if (direction === "next") {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  const ImageGallery = ({ images }) => (
    <div className="flex gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            className="rounded-md cursor-pointer w-64 h-64"
            layout="intrinsic"
            onClick={() => openImageModal(index)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-4 !border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="text-xl font-bold">اقامتگاه :</h1>

      <div className="w-24 flex items-center flex-col">
        <span className="text-gray-500 inline-block ">
          اقامتگاه <span className="text-black">یزد</span>
        </span>
        <div
          style={{ borderColor: "var(--color-buttonprimary)" }}
          className="w-24 h-1 !border-b-2 "
        ></div>
        <div
          style={{ borderColor: "var(--color-buttonprimary)" }}
          className="border-b-2 w-full"
        ></div>
      </div>

      <div className="flex gap-2 items-center">
        <IoIosHome />
        <p>نام اقامتگاه :</p>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <span>درباره اقامتگاه :</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas id cum
          harum aspernatur explicabo quae? Iusto ratione dolorem ab dicta?
        </p>
      </div>

      <RoomList roomTypes={roomTypes} />

      <h1 className="!text-xl !font-bold">تصاویر اقامتگاه</h1>
      <p className="text-sm">برای بزرگنمایی بر روی تصاویر کلیک کنید.</p>

      <ImageGallery images={images} />

      {openModal && selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-96 h-96 object-contain"
              layout="intrinsic"
            />
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white p-2"
              onClick={() => changeImage("prev")}
            >
              ←
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white p-2"
              onClick={() => changeImage("next")}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
