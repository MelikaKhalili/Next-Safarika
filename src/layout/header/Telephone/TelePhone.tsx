import telePhoneLogo from "@/assets/images/telePhoneLogo.png";
import Image from "next/image";
export default function TelePhone() {
  return (
    <div className="flex justify-center items-center gap-1">
      <p>021-44451218</p>
      <Image className="w-6" src={telePhoneLogo} alt="telePhoneLogo" />
    </div>
  );
}
