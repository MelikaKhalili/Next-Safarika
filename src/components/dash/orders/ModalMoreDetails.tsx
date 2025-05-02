"use client";
import DataTable from "@/components/shared/Tabel/DataTabel";
import; { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalMoreDetailsProps = {
  isOpenModal: boolean;
  order: any;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Define the data type to match the accessors
type OrderData = {
  orderCode: string;
  customerName: string;
  orderDate: string;
  orderStatus: string;
  totalprice: string;
};

const columns = [
  {
    Header: "نام مشتری",
    accessor: "customerName" as keyof OrderData,
    width: "150px",
  },
  {
    Header: "تاریخ سفارش",
    accessor: "orderDate" as keyof OrderData,
    width: "150px",
  },
  {
    Header: "وضعیت سفارش",
    accessor: "orderStatus" as keyof OrderData,
    width: "150px",
  },
];

export default function ModalMoreDetails({
  isOpenModal,
  setIsOpenModal,
  order,
}: ModalMoreDetailsProps) {
  const [editingPrice, setEditingPrice] = useState(false);
  const [editingQuantity, setEditingQuantity] = useState(false);
  const [priceValue, setPriceValue] = useState(order?.items?.[0]?.price || "0");
  const [quantityValue, setQuantityValue] = useState(
    order?.items?.[0]?.Quantity || "0"
  );

  const data = order
    ? [
        {
          orderCode: order.id || "-",
          customerName: order.customer_name || "-",
          orderDate: order.deliveryDate || "-",
          orderStatus: order.status || "-",
          totalprice: order.totalprice || "-",
        },
      ]
    : [];

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceValue(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityValue(e.target.value);
  };

  const handlePriceBlur = () => {
    setEditingPrice(false);
    // Here you would typically update the order in your state management system
    // For example: dispatch(updateOrderPrice(order.id, priceValue));
  };

  const handleQuantityBlur = () => {
    setEditingQuantity(false);
    // Here you would typically update the order in your state management system
    // For example: dispatch(updateOrderQuantity(order.id, quantityValue));
  };

  return (
    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent
        w="80rem"
        h="35rem"
        maxW="90vw"
        className="!bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <button
          onClick={() => setIsOpenModal(false)}
          className="absolute top-4 left-4 hover:scale-110 transition-transform z-10"
        >
          <AiOutlineCloseCircle className="!text-indigo-600 !text-4xl cursor-pointer hover:!text-indigo-800" />
        </button>
        <ModalBody className="!p-8 grid grid-cols-2 gap-8">
          {/* Order Details Section */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white h-full overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 border-b border-indigo-300 pb-3">
              جزئیات سفارش
            </h3>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <DataTable
                showFooter={false}
                columns={columns}
                data={data}
                pageSize={1}
              />
            </div>
            <div className="grid grid-cols-2 gap-y-4">
              <p className="font-medium">عنوان سفارش:</p>
              <p className="text-right">{order.items[0].titel}</p>
              <p className="font-medium">قیمت سفارش:</p>
              {editingPrice ? (
                <input
                  type="number"
                  value={priceValue}
                  onChange={handlePriceChange}
                  onBlur={handlePriceBlur}
                  onKeyDown={(e) => e.key === "Enter" && handlePriceBlur()}
                  className="text-right bg-white/20 rounded px-2 py-1 text-white w-full"
                  autoFocus
                />
              ) : (
                <p
                  className="text-right font-bold cursor-pointer hover:bg-white/10 rounded px-2 py-1"
                  onClick={() => setEditingPrice(true)}
                >
                  {priceValue} تومان
                </p>
              )}
              <p className="font-medium">تعداد سفارش:</p>
              {editingQuantity ? (
                <input
                  type="number"
                  value={quantityValue}
                  onChange={handleQuantityChange}
                  onBlur={handleQuantityBlur}
                  onKeyDown={(e) => e.key === "Enter" && handleQuantityBlur()}
                  className="text-right bg-white/20 rounded px-2 py-1 text-white w-full"
                  autoFocus
                />
              ) : (
                <p
                  className="text-right cursor-pointer hover:bg-white/10 rounded px-2 py-1"
                  onClick={() => setEditingQuantity(true)}
                >
                  {quantityValue}
                </p>
              )}
            </div>
          </div>

          {/* Customer Info and Order Status Section */}
          <div className="grid grid-rows-2 gap-8 h-full">
            {/* Customer Information */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-indigo-300 pb-3">
                مشخصات مشتری
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                <p className="font-medium">نام و نام خانوادگی:</p>
                <p className="text-right">{order.customer_name}</p>
                <p className="font-medium">آدرس سفارش دهنده:</p>
                <p className="text-right">{order.customer_address}</p>
                <p className="font-medium">نوع تور انتخابی:</p>
                <p className="text-right">{order.deliver_item}</p>
                <p className="font-medium">شماره تلفن:</p>
                <p className="text-right">{order.customer_phone}</p>
              </div>
            </div>

            {/* Order Status */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-indigo-300 pb-3">
                وضعیت سفارش
              </h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-lg">
                    {order.status === "delivered"
                      ? "مشتری گرامی سفارش شما تحویل داده شده است"
                      : "مشتری گرامی طی چند روز آینده سفارش شما به دست شما خواهد رسید"}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-y-4">
                  <p className="font-medium">زمان تحویل سفارش:</p>
                  <p className="text-right">
                    {new Date(order.deliver_time).toLocaleDateString("fa-IR")}
                  </p>
                  <p className="font-medium">زمان ثبت سفارش:</p>
                  <p className="text-right">
                    {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
