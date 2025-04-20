const BestAmenities = [
  { text: "اینترنت وای فای" },
  { text: "آنتن‌دهی تلفن همراه" },
  { text: "سرویس بهداشتی" },
  { text: "سوپرمارکت" },
  { text: "رستوران" },
  { text: "درمانگاه" },
  { text: "پارکینگ" },
];

export default function Bestamenities() {
  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">امکانات رفاهی مقصد</h1>
      <div className="flex gap-8 w-full mt-4">
        {BestAmenities.map((item, index) => {
          return (
            <button
              className="!bg-gray-300 !text-sm  !py-1 !px-3 rounded-2xl "
              key={index}
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
