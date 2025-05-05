import { Button } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
export default function UnsuccessfulPayment() {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center !min-h-[100vh]">
      <h1 className="!text-2xl !font-bold">پرداخت ناموفق</h1>
      <div className="!bg-red-600 w-16 h-16 rounded-full flex justify-center items-center">
        <RxCross2 className="!text-2xl !text-white" />
      </div>
      <Button
        size={"sm"}
        width={"200px"}
        bg={"blackAlpha.800"}
        textColor={"white"}
        _hover={{ bg: "black" }}
      >
        بازگشت به سایت پذیرنده
      </Button>
    </div>
  );
}
