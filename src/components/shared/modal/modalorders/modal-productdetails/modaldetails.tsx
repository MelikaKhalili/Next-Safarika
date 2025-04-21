"use client";
import DataTable from "@/components/shared/Tabel/DataTabel";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ModalMoreDetailsProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const columns = [
  { Header: "نام مشتری", accessor: "customerName" },
  { Header: "تاریخ سفارش", accessor: "orderDate" },
  { Header: "وضعیت سفارش", accessor: "orderStatus" },
];

const data = [
  {
    orderCode: "001",
    customerName: "مهدی",
    orderDate: "2025-04-21",
    orderStatus: "در حال پردازش",
  },
  {
    orderCode: "002",
    customerName: "علی",
    orderDate: "2025-04-20",
    orderStatus: "تکمیل شده",
  },
];

export default function ModalMoreDetails({
  isOpenModal,
  setIsOpenModal,
}: ModalMoreDetailsProps) {
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
        <ModalBody className="!bg-gray-300 grid grid-cols-2 gap-8 !p-12 rounded-md text-white">
          <div className="bg-blue-600 rounded-2xl !p-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">جزئیات سفارش</h3>
            <DataTable
              showFooter={false}
              columns={columns}
              data={data}
              pageSize={5}
            />
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-blue-600 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-2xl font-bold">مشخصات مشتری</h3>
            </div>
            <div className="bg-blue-600 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-2xl font-bold">وضعیت سفارش</h3>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
