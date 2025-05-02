export default function Essentials() {
  const Essentials = [
    { text: "زیرانداز برای شب نشینی در کوبر" },
    { text: "لباس خنک" },
    { text: "کارت شناسایی" },
    { text: "داروی شخصی" },
    { text: "کفش مناسب پیاده روی " },
    { text: "لباس گرم برای شب کویر" },
    { text: "پاوربانک" },
    { text: "تراول ماگ یا فلاکس شخصی" },
  ];
  const Suggesteditems = [
    { text: "کرم ضد آفتاب" },
    { text: "کلاه لبه دار" },
    { text: "عینک آفتابی" },
    { text: "بازی های گروهی" },
    { text: "ساز موسیقی" },
  ];
  return (
    <div className="flex flex-col gap-2 !border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">لوازم مورد نیاز در سفر</h1>
      <p>لوازم ضروری:</p>
      <div className="flex gap-8 w-full mt-4 ">
        {Essentials.map((item, index) => {
          return (
            <button
              className="!bg-gray-300 !text-[11px]  !py-1 !px-3 rounded-2xl "
              key={index}
            >
              {item.text}
            </button>
          );
        })}
      </div>
      <p>لوازم پیشنهادی:</p>
      <div className="flex gap-8 w-full mt-4">
        {Suggesteditems.map((item, index) => {
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
