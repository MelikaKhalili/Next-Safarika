export default function Cancellationpolicy({ productData }) {
  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">قوانین کنسلی تور</h1>
      <p>{productData.CancleRulesTour}</p>
    </div>
  );
}
