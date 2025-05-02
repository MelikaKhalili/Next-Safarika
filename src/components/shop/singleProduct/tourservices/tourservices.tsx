import { IoMdRestaurant } from "react-icons/io";

export default function Tourservices({ productData }) {
  return (
    <div className="flex flex-col gap-2 !border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">خدمات تور</h1>
      <div className="flex items-center gap-2">
        <IoMdRestaurant />
        <p>{productData.Tourservices}</p>
      </div>
    </div>
  );
}
