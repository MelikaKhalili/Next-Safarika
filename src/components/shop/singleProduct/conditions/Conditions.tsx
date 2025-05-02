export default function Conditions({ productData }) {
  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">شرایط و مقررات</h1>
      <p>{productData.Conditions}</p>
    </div>
  );
}
