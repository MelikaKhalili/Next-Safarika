import Banner from "@/assets/images/Banner.png";
import Image from "next/image";
export default function AdvertisingBanner() {
  return (
    <div className="relative w-full aspect-[4/1] ">
      <Image src={Banner} alt="Banner" fill />
    </div>
  );
}
