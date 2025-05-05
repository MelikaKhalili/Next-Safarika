"use client";
import {
  setAddress,
  setName,
  setNationalcode,
  setPhone,
} from "@/features/form/formSlice";
import { RootState } from "@/store/store";
import { Button, Input, useToast } from "@chakra-ui/react";
import { getCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const Tocken = getCookie("token");
  console.log(Tocken);

  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const { customer_name, customer_address, customer_phone, nationalcode } =
    useSelector((state: RootState) => state.form);
  const cartItems = useSelector((state: RootState) => state.cart);

  const isFormValid =
    customer_name && customer_address && customer_phone && nationalcode;

  console.log(cartItems);
  const handleAddToursToOrders = async () => {
    router.push("/payment");
  };
  if (!Tocken) {
    return (
      <div className=" flex flex-col justify-center items-center !min-h-[100vh] gap-4">
        <p className="!text-3xl">برای ادامه فرایند نیازمند لاگین هستین</p>
        <div className="flex gap-2">
          <Button
            bg={"blue.500"}
            textColor={"white"}
            onClick={() => router.push("/login")}
          >
            ورود
          </Button>
          <Button
            bg={"blue.500"}
            textColor={"white"}
            onClick={() => router.push("/register")}
          >
            ثبت نام
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center !py-20">
      <div className="flex justify-center items-center !bg-blue-500 !w-full h-18">
        <h1 className="!text-2xl !text-white ">اطلاعات تحویل گیرنده</h1>
      </div>
      <div className="flex flex-col gap-3 !p-8">
        <div className="flex flex-col gap-8 w-full ">
          <div className="flex flex-col justify-start items-start w-full gap-3 ">
            <label htmlFor="NameInfo">
              نام و نام خانوادگی گیرنده را وارد نمایید
            </label>
            <Input
              value={customer_name}
              onChange={(e) => dispatch(setName(e.target.value))}
              border={"1px solid gray"}
              width={"400px"}
              placeholder="ملیکا خلیلی"
              className="!border-2  !border-blue-300"
              _placeholder={{ textColor: "gray.300", fontsize: "sm" }}
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <label htmlFor="Address">آدرس گیرنده را وارد نمایید</label>
            <Input
              value={customer_address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
              border={"1px solid gray"}
              id="Address"
              placeholder="پونک"
              _placeholder={{ textColor: "gray.300", fontsize: "sm" }}
              className="!border-2  !border-blue-300"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <label htmlFor="">تلفن گیرنده را وارد نمایید</label>
            <Input
              value={customer_phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              border={"1px solid gray"}
              placeholder="09927270730"
              className="!border-2  !border-blue-300"
              _placeholder={{ textColor: "gray.300", fontsize: "sm" }}
            />
          </div>{" "}
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <label htmlFor="">کد ملی گیرنده را وارد نمایید</label>
            <Input
              value={nationalcode}
              onChange={(e) => dispatch(setNationalcode(e.target.value))}
              border={"1px solid gray"}
              placeholder="0200806924"
              className="!border-2  !border-blue-300"
              _placeholder={{ textColor: "gray.300", fontsize: "sm" }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center !my-3">
          <Button
            onClick={handleAddToursToOrders}
            bg={"blue.300"}
            width={"200px"}
            textColor={"white"}
            borderRadius={"xl"}
            isLoading={false}
            _hover={{ bg: "blue.600" }}
            isDisabled={!isFormValid}
          >
            پرداخت و ثبت سفارش
          </Button>
        </div>
      </div>
    </div>
  );
}
