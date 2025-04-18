import { Continents } from "@/components/shared/WorldMap/provinces";

const IranMap = ({ hoveredProvinceId, onProvinceHover }: any) => {
  return (
    <svg
      viewBox="0 0 900 900"
      className="w-[50vw] h-[60vh] relative top-8 left-0 z-[-999]"
    >
      {Continents.map((Continent) => (
        <path
          key={Continent.id}
          id={Continent.id}
          name={Continent.name}
          d={Continent.d}
          onMouseEnter={() => onProvinceHover(Continent.id)}
          onMouseLeave={() => onProvinceHover(null)}
          className={`transition-all duration-200 cursor-pointer ${
            hoveredProvinceId === Continent.id
              ? "fill-blue-700"
              : "fill-slate-400"
          }`}
        />
      ))}
    </svg>
  );
};
export default IranMap;
