import BrandLogo from "@/assets/images/LogoBrand2.png";
import "@/components/styles/sideBar.css";
import Image from "next/image";
import LogoTitleSection from "./logotitlesection/LogoTitleSection";
import MenuItems from "./menuitems/MenuItems";
export default function MenuLinks() {
  return (
    <div
      style={{ color: "var(--color-four)" }}
      className="w-full flex flex-col items-center p-4 gap-6 "
    >
      <div
        style={{ backgroundColor: "var(--color-secondary)" }}
        className="absolute right-6 top-[4rem] w-12 h-12  rounded-full overflow-hidden"
      >
        <Image
          className="w-full h-full object-cover rounded-full aspect-square"
          src={BrandLogo}
          alt="BrandLogo"
        />
      </div>
      <div className="flex items-center gap-4">
        <LogoTitleSection />
      </div>
      <MenuItems />
    </div>
  );
}
