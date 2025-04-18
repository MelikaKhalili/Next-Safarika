import SearchLogo from "@/assets/images/iconSearch.png";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
export default function Search() {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        className="absolute right-2 z-10"
        src={SearchLogo}
        alt="Search Logo"
        width={18}
        height={18}
      />
      <Input
        bg="#f9f9f9"
        placeholder="جست و جو"
        size="md"
        width="300px"
        height="40px"
        borderRadius="lg"
        borderColor="teal.500"
        focusBorderColor="teal.300"
        _placeholder={{ fontSize: "15px", color: "#bfbfbf" }}
        pr="30px"
        _hover={{
          bg: "white",
        }}
      />
    </div>
  );
}
