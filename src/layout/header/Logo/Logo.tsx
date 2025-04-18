import BrandLogo from "@/assets/images/BrandLogo.jpg";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex gap-4 items-center">
      <Image className="w-12 h-12 rounded-md" src={BrandLogo} alt="BrandLogo" />
      <p className="text-xl font-bold bg-gradient-to-l from-blue-900 to-green-200 bg-clip-text text-transparent">
        سفریکا
      </p>
    </div>
  );
}
