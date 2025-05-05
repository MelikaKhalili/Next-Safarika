"use client";
import { addToOrders, deleteAllItems } from "@/api/userApi";
import cartBank from "@/assets/images/cartBank.png";
import { clearCart } from "@/features/cart/cartSlice";
import Footer from "@/layout/footer/page";
import { RootState } from "@/store/store";
import { Button, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { customer_name, customer_address, customer_phone, nationalcode } =
    useSelector((state: RootState) => state.form);

  const Unsuccessfulpayment = () => {
    router.push("/payment/Unsuccessfulpayment");
  };

  const SuccessfulPayment = async () => {
    try {
      const totalPrice = cartItems.reduce(
        (acc: number, item: { Price: any; quantity: any }) =>
          acc + (item.Price || 0) * (item.quantity || 1),
        0
      );

      const currentDate = new Date().toISOString();

      const orderInfo = {
        customer_name,
        customer_address,
        customer_phone,
        nationalcode,
        items: cartItems,
        totalprice: totalPrice,
        status: "pending",
        deliver_time: currentDate,
        Quantity: cartItems.reduce(
          (acc: number, item: { quantity: number }) => acc + item.quantity,
          0
        ),
      };

      console.log("Sending to API:", orderInfo);
      await addToOrders(orderInfo);

      toast({
        title: "سفارش با موفقیت ثبت شد",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      await deleteAllItems();
      dispatch(clearCart());
      router.push("/payment/Successfulpayment");
    } catch (error) {
      console.log(error);
      toast({
        title: "خطا در ثبت سفارش",
        description: "لطفا دوباره تلاش کنید",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center !min-h-[100vh]">
        <Image className="w-[40rem]" src={cartBank} alt="cartBank" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
            <p>شماره کارت</p>
            <Input type="number" width="300px" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>CVV2</p>
            <Input width="300px" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>تاریخ انقضا</p>
            <div className="flex justify-center items-center gap-2">
              <Input size="sm" width="140px" />
              /
              <Input size="sm" width="140px" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>رمز اینترنتی پویا</p>
            <Input width="300px" />
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button
              onClick={SuccessfulPayment}
              className="!bg-green-400 !text-white hover:!bg-green-600"
            >
              پرداخت
            </Button>
            <Button
              onClick={Unsuccessfulpayment}
              className="!bg-red-400 !text-white hover:!bg-red-600"
            >
              انصراف
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
