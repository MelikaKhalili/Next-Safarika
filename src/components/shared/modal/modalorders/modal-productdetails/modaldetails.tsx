"use client";
import DataTable from "@/components/shared/Tabel/DataTabel";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
type ModalMoreDetailsProps = {
  isOpenModal: boolean;
  order: any;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const columns = [
  { Header: "نام مشتری", accessor: "customerName" },
  { Header: "تاریخ سفارش", accessor: "orderDate" },
  { Header: "وضعیت سفارش", accessor: "orderStatus" },
];

export default function ModalMoreDetails({
  isOpenModal,
  setIsOpenModal,
  order,
}: ModalMoreDetailsProps) {
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
          <div className="w-full h-[450px] bg-blue-600 rounded-2xl !p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">جزئیات سفارش</h3>
            <DataTable
              showFooter={false}
              columns={columns}
              data={data}
              pageSize={1}
            />
            <div className="grid grid-cols-2">
              <p>عنوان سفارش :</p> <p>{order.items[0].titel}</p>
              <p>قیمت سفارش :</p>
              <p>{order.items[0].price} تومان</p>
              <p>تعداد سفارش :</p>
              <p>{order.items[0].Quantity}</p>
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
                <span>نوع تور انتخابی :</span>
                <span>{order.deliver_item}</span>
                <span>شماره تلفن فرد سفارش دهنده :</span>
                <span>{order.customer_phone}</span>
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
                  <span>زمان تحویل سفارش شما :</span>
                  <span>
                    {new Date(order.deliver_time).toLocaleDateString("fa-IR")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
