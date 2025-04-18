import cartHoveredLogo from "@/assets/svgs/cartHoveredLogo.svg";
import cartLogo from "@/assets/svgs/cartLogo.svg";
import userLogoBlack from "@/assets/svgs/userLogoBlack.svg";
import userLogoWhite from "@/assets/svgs/userLogoWhite.svg";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
interface IProps {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isHoveredCart: boolean;
  isHovered: boolean;
  setIsHoveredCart: Dispatch<SetStateAction<boolean>>;
}
export default function HeaderButtons({
  setIsHovered,
  isHoveredCart,
  isHovered,
  setIsHoveredCart,
}: IProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex justify-center items-center"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHoveredCart ? 1 : 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          fontSize="sm"
          bg="white"
          _hover={{
            bg: "#48D1CC",
            textColor: "white",
            boxShadow: "lg",
          }}
        >
          <Image
            className="w-5"
            src={isHovered ? userLogoWhite : userLogoBlack}
            alt="cartLogo"
          />
          ورود/عضویت
        </Button>
      </motion.div>
      <motion.div
        onMouseEnter={() => setIsHoveredCart(true)}
        onMouseLeave={() => setIsHoveredCart(false)}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHoveredCart ? 1 : 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className="w-7 cursor-pointer"
          src={isHoveredCart ? cartHoveredLogo : cartLogo}
          alt="cartLogo"
        />
      </motion.div>
    </div>
  );
}
