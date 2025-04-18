import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
interface IProps {
  toggleAccordion: (index: any) => void;
  setIsHoveredBtn0: Dispatch<SetStateAction<boolean>>;
  isHoveredBtn0: boolean;
  setIsHoveredBtn1: Dispatch<SetStateAction<boolean>>;
  isHoveredBtn1: boolean;
  setIsHoveredBtn2: Dispatch<SetStateAction<boolean>>;
  isHoveredBtn2: boolean;
}
export default function NavBar({
  toggleAccordion,
  setIsHoveredBtn0,
  isHoveredBtn0,
  setIsHoveredBtn1,
  isHoveredBtn1,
  setIsHoveredBtn2,
  isHoveredBtn2,
}: IProps) {
  return (
    <div className="flex gap-10">
      <button
        className="cursor-pointer transition-all relative px-4 py-2"
        onClick={() => toggleAccordion(0)}
        onMouseEnter={() => setIsHoveredBtn0(true)}
        onMouseLeave={() => setIsHoveredBtn0(false)}
      >
        تور داخلی
        <motion.span
          initial={{ width: 0, right: 0, opacity: 0 }}
          animate={
            isHoveredBtn0
              ? { width: "100%", right: 0, opacity: 10 }
              : { width: 0, right: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-[52px] right-0 h-[2px] bg-blue-500 rounded z-[9999]"
        />
      </button>
      <button
        className="cursor-pointer transition-all relative px-4 py-2"
        onClick={() => toggleAccordion(1)}
        onMouseEnter={() => setIsHoveredBtn1(true)}
        onMouseLeave={() => setIsHoveredBtn1(false)}
      >
        تور خارجی
        <motion.span
          initial={{ width: 0, right: 0, opacity: 0 }}
          animate={
            isHoveredBtn1
              ? { width: "100%", right: 0, opacity: 10 }
              : { width: 0, right: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-[52px] right-0 h-[2px] bg-blue-500 rounded z-[9999]"
        />
      </button>
      <button
        className="cursor-pointer transition-all relative px-4 py-2"
        onClick={() => toggleAccordion(2)}
        onMouseEnter={() => setIsHoveredBtn2(true)}
        onMouseLeave={() => setIsHoveredBtn2(false)}
      >
        ویزا
        <motion.span
          initial={{ width: 0, right: 0, opacity: 0 }}
          animate={
            isHoveredBtn2
              ? { width: "100%", right: 0, opacity: 10 }
              : { width: 0, right: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-[52px] right-0 h-[2px] bg-blue-500 rounded z-[9999]"
        />
      </button>
      <button className="cursor-pointer">بلیط اتوبوس</button>
    </div>
  );
}
