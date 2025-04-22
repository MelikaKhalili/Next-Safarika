"use client";
import { AppDispatch } from "@/app/store/store";
import DataTable from "@/components/shared/Tabel/DataTabel";
import ModalMoreDetails from "@/components/shared/modal/modalorders/modal-productdetails/modaldetails";
import { fetchOrders } from "@/features/orders/ordersSlice";
import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

export default function OrdersSection() {
  const dispatch = useDispatch<AppDispatch>();
  const [filterOption, setFilterOption] = useState("");
  const orders = useSelector((state: any) => state.orders.items);
  const status = useSelector((state: any) => state.orders.status);
  const error = useSelector((state: any) => state.orders.error);
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log("Orders:", orders);
  useEffect(() => {
    if (status === "idle" || status === "failed") {
      dispatch(fetchOrders());
    }
    console.log("Orders from Redux:", orders);
  }, [dispatch, status, orders]);
  const OrdersFilterOptions = [
    { value: "price", label: "قیمت" },
    { value: "Deliverystatus", label: "وضعیت ارسال" },
  ];

  const columns = [
    { Header: "نام کاربر", accessor: "userName" },
    { Header: "مبلغ سفارش", accessor: "price" },
    { Header: "زمان ثبت", accessor: "Registrationtime" },
    { Header: "وضعیت تحویل", accessor: "Deliverystatus" },
    { Header: "فعالیت", accessor: "Activity" },
  ];

  const transformedData =
    orders && orders.length > 0
      ? orders.map((order: any) => {
          const registrationDate = order.createdAt
            ? moment(order.deliveryDate).locale("fa").format("YYYY/MM/DD")
            : "نامشخص";

          return {
            userName: order.customer_name || "ناشناس",
            price: order.totalprice || 0,
            Registrationtime: registrationDate,
            Deliverystatus:
              order.status === "delivered" ? (
                <AiOutlineCheckCircle className="!text-2xl !text-green-700" />
              ) : (
                <AiOutlineCloseCircle className="!text-2xl !text-red-500" />
              ),
            Activity: (
              <button onClick={() => setIsOpenModal(true)}>بررسی سفارش</button>
            ),
          };
        })
      : [];

  if (status === "loading") {
    return (
      <div className="fixed top-0 right-0 z-[9999] bg-black/70 w-screen h-screen flex justify-center items-center ">
        <FadeLoader color="white" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>خطا: {error}</div>;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={transformedData.length > 0 ? transformedData : []}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={OrdersFilterOptions}
      />
      {isOpenModal && (
        <ModalMoreDetails
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
}
