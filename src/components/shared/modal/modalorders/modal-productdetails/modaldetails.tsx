"use client";
import { UpdataStatus } from "@/api/userApi";
import { AppDispatch } from "@/app/store/store";
import DataTable from "@/components/shared/Tabel/DataTabel";
import { fetchOrders } from "@/features/orders/ordersSlice";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

type ModalMoreDetailsProps = {
  isOpenModal: boolean;
  order: any;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const columns = [
  { Header: "نام مشتری", accessor: "customerName", width: "150px" },
  { Header: "تاریخ سفارش", accessor: "orderDate", width: "150px" },
  { Header: "وضعیت سفارش", accessor: "orderStatus", width: "150px" },
];

export default function ModalMoreDetails({
  isOpenModal,
  setIsOpenModal,
  order,
}: ModalMoreDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [localOrder, setLocalOrder] = useState(order);

  useEffect(() => {
    setLocalOrder(order);
  }, [order]);

  const data = order
    ? [
        {
          orderCode: order.id || "-",
          customerName: order.customer_name || "-",
          orderDate:
            new Date(order.createdAt).toLocaleDateString("fa-IR") || "-",
          orderStatus: order.status || "-",
          totalprice: order.totalprice || "-",
        },
      ]
    : [];

  const ChangesStatus = async () => {
    try {
      await UpdataStatus(order.id, "delivered");
      dispatch(fetchOrders());
      const threeDaysLater = new Date();
      threeDaysLater.setDate(threeDaysLater.getDate() + 3);
      setLocalOrder({
        ...order,
        status: "delivered",
        deliver_time: threeDaysLater.toISOString(),
      });
      setIsOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent w="80rem" h="35rem" maxW="90vw">
        <button
          onClick={() => setIsOpenModal(false)}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          <AiOutlineCloseCircle className="!text-white !text-4xl cursor-pointer hover:!text-red-400" />
        </button>
        <ModalBody className="!bg-gray-300 w-full h-full grid grid-cols-2 gap-8 !p-12 rounded-md text-white">
          <div className="w-full h-[455px] bg-blue-600 rounded-2xl !p-12  shadow-lg">
            <h3 className="text-2xl font-bold mb-2">جزئیات سفارش</h3>
            <DataTable
              showFooter={false}
              columns={columns}
              data={data}
              pageSize={1}
            />
            <div className="grid grid-cols-2">
              <p>عنوان سفارش :</p>{" "}
              <p className="!text-sm !font-bold">{order.items[0].TourName}</p>
              <p>قیمت سفارش :</p>
              <p className="!text-sm">
                {order.totalprice.toLocaleString("fa-IR")} تومان
              </p>
              <p>تعداد سفارش :</p>
              <p className="!text-sm">{order.Quantity}</p>
              <p>ثبت تحویل سفارش :</p>
              <Button
                size="sm"
                onClick={ChangesStatus}
                bg="blue.300"
                textColor="white"
                width={"100px"}
                marginBottom={"12"}
              >
                تغییر وضعیت
              </Button>
            </div>
          </div>
          <div className="h-[450px] grid grid-rows-2 gap-6">
            <div className="flex flex-col justify-center items-center gap-4 bg-blue-600 rounded-2xl  shadow-lg">
              <div>
                <h3 className="!text-2xl font-bold ">مشخصات مشتری</h3>
              </div>
              <div className=" grid grid-cols-2 gap-4 !text-sm">
                <span>نام و نام خانوادگی :</span>
                <span>{order.customer_name}</span>
                <span>آدرس سفارش دهنده:</span>
                <span>{order.customer_address}</span>
                {/* <span>نوع تور انتخابی :</span>
                <span>{order.deliver_item}</span> */}
                <span>شماره تلفن فرد سفارش دهنده :</span>
                <span>{order.customer_phone.toLocaleString("fa-IR")}</span>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-4 bg-blue-600 rounded-2xl p-6 shadow-lg space-y-4 ">
              <h3 className="!text-2xl font-bold">وضعیت سفارش</h3>
              <div className=" flex flex-col gap-4 justify-center items-center">
                <span>
                  {order.status === "delivered"
                    ? "مشتری گرامی سفارش شما تحویل داده شده است"
                    : "مشتری گرامی طی چند روز آینده  سفارش شما به دست شما خواهد رسید"}
                </span>
                <div className="grid gap-4 grid-cols-2">
                  <span>زمان ثبت سفارش شما :</span>
                  <span>
                    {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                  {order.status === "delivered" && order.deliver_time && (
                    <>
                      <span>زمان تحویل سفارش شما :</span>
                      <span>
                        {new Date(localOrder.deliver_time).toLocaleDateString(
                          "fa-IR"
                        )}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
