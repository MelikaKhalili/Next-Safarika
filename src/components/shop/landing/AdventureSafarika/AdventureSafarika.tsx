"use client";
import ImageAdventure3 from "@/assets/images/Adventure2.jpg";
import ImageAdventure4 from "@/assets/images/Adventure3.jpg";
import VideoPoster from "@/assets/images/Coverviedo.jpg";
import ImageAdventure2 from "@/assets/images/ImageAdventure1.jpg";
import ImageAdventure1 from "@/assets/images/kenarak.jpg";
import Image from "next/image";
import { useState } from "react";
export default function AdventureSafarika() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 !px-12">
      <h1 className="!text-2xl !font-bold">ماجراجویی سفریکایی ها</h1>
      <div className=" grid grid-cols-2 gap-6">
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 group-hover:opacity-0 h-[73.5%]"></div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="rounded-md"
              src={ImageAdventure1}
              alt="ImageAdventure1"
            />
            <p className="absolute bottom-72 z-30 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
              کنارک
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2 ">
          <div className="!h-[30rem] grid grid-cols-2 gap-4">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 group-hover:opacity-0 h-[95%]"></div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="rounded-md"
                  src={ImageAdventure2}
                  alt="ImageAdventure2"
                />
                <p className="absolute top-12 z-30 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
                  درفک | dorfak
                </p>
              </div>
            </div>
            <div className="relative inline-block group w-full h-[460px] rounded-md overflow-hidden">
              {!isVideoPlaying && (
                <>
                  <div className="absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 group-hover:opacity-0 z-10"></div>

                  <Image
                    src={VideoPoster}
                    alt="Video Poster"
                    fill
                    className="object-cover rounded-md"
                  />

                  <p className="absolute top-12 right-6 z-30 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
                    مجموعه قایق‌رانی
                  </p>

                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="bg-white/30 backdrop-blur-sm p-4 rounded-full transition-opacity duration-300 group-hover:opacity-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-12 h-12"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}

              <video
                width="100%"
                height="100%"
                controls
                className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 ${
                  isVideoPlaying ? "opacity-100 z-40" : "opacity-0"
                }`}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src="/viedo/ViedoAdventure.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="grid !grid-cols-2 gap-4">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 group-hover:opacity-0 h-[47%]"></div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="rounded-md !h-56 object-cover"
                  src={ImageAdventure3}
                  alt="ImageAdventure3"
                />
                <p className="absolute top-12 z-30 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
                  شهران
                </p>
              </div>
            </div>

            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-black/60 rounded-md transition-opacity duration-300 group-hover:opacity-0 h-[47%]"></div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  className="rounded-md !h-56 object-cover"
                  src={ImageAdventure4}
                  alt="ImageAdventure4"
                />
                <p className="absolute top-12 z-30 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
                  اسکله کنارک
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
