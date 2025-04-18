import { useState } from "react";
export default function UploadImage() {
  const [images, setImages] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages(imagePreviews);
  };
  return (
    <div className="w-full space-y-4 ">
      <label className="block text-right font-semibold text-[#1f4b74]">
        آپلود عکس تور
      </label>

      <div className="flex items-center gap-4 !border-1  p-4 !bg-gray-200 rounded-md">
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt="preview"
            className="!w-48 !h-32 object-cover rounded-md border border-[#1f4b74] shadow"
          />
        ) : (
          <div className="!border-2 !border-blue-800 !w-48 !h-32 !flex justify-center items-center  !bg-blue-400 rounded-md">
            <p className="!text-sm">پیش نمایش عکس محصول</p>
          </div>
        )}
        <label
          htmlFor="chooseImg"
          className="cursor-pointer bg-blue-900 text-sm text-white !px-16 !py-2 rounded-lg shadow hover:bg-[#2b4fc9] inline-block"
        >
          انتخاب عکس
        </label>
        <input
          id="chooseImg"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
