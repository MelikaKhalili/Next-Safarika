import { provinces } from "./provinces ";

const IranMap = ({ hoveredProvinceId, onProvinceHover }: any) => {
  return (
    <svg viewBox="0 0 1000 900" className="w-full h-full relative z-[-999]">
      {provinces.map((province) => (
        <path
          key={province.id}
          id={province.id}
          name={province.name}
          d={province.d}
          onMouseEnter={() => onProvinceHover(province.id)}
          onMouseLeave={() => onProvinceHover(null)}
          className={`transition-all duration-200 cursor-pointer ${
            hoveredProvinceId === province.id
              ? "fill-blue-300"
              : "fill-slate-200"
          }`}
        />
      ))}
    </svg>
  );
};
export default IranMap;
