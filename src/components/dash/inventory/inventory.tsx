"use client";
import { AppDispatch, RootState } from "@/app/store/store";
import DataTable from "@/components/shared/Tabel/DataTabel";
import { fetchProducts } from "@/features/products/productsSlice";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

const InventorySection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterOption, setFilterOption] = useState("");

  const {
    items: products = [],
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const inventoryFilterOptions = [
    { value: "price", label: "قیمت" },
    { value: "brand", label: "برند" },
    { value: "category", label: "دسته‌بندی" },
  ];

  const columns = [
    { Header: "عکس محصول", accessor: "ProductImg" },
    { Header: "نام محصول", accessor: "ProductName" },
    { Header: "تعداد موجود", accessor: "Availablequantity" },
    { Header: "قیمت", accessor: "price" },
    { Header: "عملیات", accessor: "actions" },
  ];

  const formattedOrders = products?.map(
    (product: {
      Price: number;
      TourName: string;
      Image: any;
      Quantity: number;
      images: any[];
      name: string;
      category: { name: string };
      brand: string;
      quantity: number;
      status: string;
      price: number;
    }) => ({
      ProductImg: product.Image?.[0] || "",
      ProductName: product.TourName || "نام ندارد",
      Category: product.category?.name || "بدون دسته",
      Organizer: product.brand || "نامشخص",
      Availablequantity: parseInt(product.Quantity) || 0,
      Status: product.status || "نامشخص",
      price: product.Price || 0,
      actions: (
        <div className="flex gap-2 justify-center">
          <div className="!bg-red-500 py-2 px-2 rounded-md">
            <MdDelete className="!text-white cursor-pointer" />
          </div>
          <div className="!bg-yellow-400 py-2 px-2 rounded-md">
            <RiEditBoxFill className="!text-white cursor-pointer" />
          </div>
        </div>
      ),
    })
  );

  if (status === "loading") {
    return (
      <div className="fixed top-0 right-0 z-[9999] bg-black/70 w-screen h-screen flex justify-center items-center ">
        <FadeLoader color="white" />
      </div>
    );
  }
  if (status === "failed") {
    return <p>خطا در دریافت محصولات: {error}</p>;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={formattedOrders}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={inventoryFilterOptions}
      />
    </div>
  );
};

export default InventorySection;
