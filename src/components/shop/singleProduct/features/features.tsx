import { RxCross1 } from "react-icons/rx";
import { SiTicktick } from "react-icons/si";

export default function Features({ productData }) {
  const Services = productData.Services || [];
  return (
    <div className=" !border-b-2 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">خدمات :</h1>
      <div className="flex flex-col gap-2">
        {Services.map((item, index) => (
          <div
            key={`service-${index}-${item.name}`}
            className="flex items-center gap-1"
          >
            {item.status ? (
              <SiTicktick className="!text-green-600" />
            ) : (
              <RxCross1 className="!text-red-600" />
            )}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
