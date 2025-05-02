export default function Travelprepinfo({ productData }) {
  const tripInfoList = productData.TripbeforInformation;
  console.log(typeof tripInfoList);
  const infoTrip = tripInfoList.map((item) => {
    const key = Object.keys(item)[0];
    return item[key];
  });
  console.log(infoTrip);
  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">توضیحات قبل از سفر</h1>
      <ul>
        <li>
          {infoTrip.map((text) => {
            return <li>{text}</li>;
          })}
        </li>
      </ul>
    </div>
  );
}
