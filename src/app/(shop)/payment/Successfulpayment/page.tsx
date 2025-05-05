import { Button } from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi2";

export default function SuccessfulPayment() {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center !min-h-[100vh]">
      <h1 className="!text-2xl !font-bold">پرداخت موفق</h1>
      <div className="!bg-green-600 w-16 h-16 rounded-full flex justify-center items-center">
        <HiCheck className="!text-2xl !text-white " />
      </div>
      <Button
        size={"sm"}
        width={"200px"}
        bg={"blackAlpha.800"}
        textColor={"white"}
        _hover={{ bg: "black" }}
      >
        مشاهده نتیجه
      </Button>
    </div>
  );
}
