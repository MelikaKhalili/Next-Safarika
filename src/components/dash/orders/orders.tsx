"use client";
import { AppDispatch } from "@/app/store/store";
import ModalMoreDetails from "@/components/shared/modal/modalorders/modal-productdetails/modaldetails";
import DataTable from "@/components/shared/Tabel/DataTabel";
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
  const [localData, setLocalData] = useState(orders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (status === "idle" || status === "failed") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  useEffect(() => {
    console.log("Orders data:", orders);
    setLocalData(orders);
  }, [orders]);

  const OrdersFilterOptions = [
    { value: "price", label: "قیمت" },
    { value: "Deliverystatus", label: "وضعیت ارسال" },
  ];

  const columns = [
    { Header: "نام کاربر", accessor: "userName", width: "150px" },
    { Header: "مبلغ سفارش", accessor: "Price", width: "100px" },
    { Header: "تعداد", accessor: "Quantity", width: "100px" },
    { Header: "زمان ثبت", accessor: "Registrationtime", width: "120px" },
    { Header: "وضعیت تحویل", accessor: "Deliverystatus", width: "100px" },
    { Header: "فعالیت", accessor: "Activity", width: "100px" },
  ];

  const transformedData =
    localData && localData.length > 0
      ? localData.map((order: any) => {
          console.log("Order Structure:", {
            id: order.id,
            items: order.items,
            quantity: order.Quantity,
            price: order.Price,
            totalprice: order.totalprice,
          });

          const registrationDate = order.createdAt
            ? moment(order.createdAt).locale("fa").format("YYYY/MM/DD")
            : "نامشخص";
          const deliveryTime = order.deliver_time
            ? moment(order.deliver_time).locale("fa").format("YYYY/MM/DD HH:mm")
            : "در انتظار ارسال";

          let totalQuantity = 0;
          if (Array.isArray(order.items)) {
            totalQuantity = order.items.reduce((acc: number, item: any) => {
              return acc + (Number(item.quantity) || 0);
            }, 0);
          }

          return {
            id: order.id,
            userName: order.customer_name || "ناشناس",
            Price: order.totalprice || 40,
            Quantity: totalQuantity,
            Registrationtime: registrationDate,
            Deliverystatus:
              order.status === "delivered" ? (
                <AiOutlineCheckCircle className="!text-2xl !text-green-700" />
              ) : (
                <AiOutlineCloseCircle className="!text-2xl !text-red-500" />
              ),
            Activity: (
              <button
                onClick={() => {
                  setIsOpenModal(true);
                  setSelectedOrder(order);
                }}
              >
                بررسی سفارش
              </button>
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
        data={transformedData}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={OrdersFilterOptions}
        showFooter={true}
      />
      {isOpenModal && (
        <ModalMoreDetails
          isOpenModal={isOpenModal}
          order={selectedOrder}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
}
