"use client";
import DataTable from "@/components/shared/Tabel/DataTabel";
import showDeleteModal from "@/components/shared/modal/modaldelete/modaldelete";
import ModalAddProduct from "@/components/shared/modal/modalproduct/modaladd/modaladd";
import { fetchProducts } from "@/features/products/productsSlice";
import type { AppDispatch, RootState } from "@/store";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import ButtonAddNewProduct from "./buttonaddnewproduct/buttonAddNewProduct";
import "./productsSection.css";
export default function ProductsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const [filterOption, setFilterOption] = useState("");
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const {
    items: products = [],
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productFilterOptions = [
    { value: "price", label: "قیمت" },
    { value: "brand", label: "برند" },
    { value: "category", label: "دسته‌بندی" },
  ];

  const columns = [
    { Header: "عکس محصول", accessor: "ProductImg" },
    { Header: "نام محصول", accessor: "ProductName" },
    { Header: "دسته بندی", accessor: "Category" },
    { Header: "برگزارکننده", accessor: "Organizer" },
    { Header: "تعداد موجود", accessor: "Availablequantity" },
    { Header: "وضعیت", accessor: "Status" },
    { Header: "قیمت", accessor: "price" },
    { Header: "عملیات", accessor: "actions" },
  ];

  const formattedProducts = products?.map(
    (product: {
      images: any[];
      name: any;
      category: { name: any };
      brand: any;
      quantity: any;
      status: any;
      price: any;
    }) => ({
      ProductImg: product.images?.[0] || "",
      ProductName: product.name || "نام ندارد",
      Category: product.category?.name || "بدون دسته",
      Organizer: product.brand || "نامشخص",
      Availablequantity: product.quantity || 0,
      actions: (
        <div className="flex gap-2 justify-center w-full">
          <button
            onClick={() =>
              showDeleteModal(() => dispatch(deleteProduct(product.id)))
            }
            className="!bg-rose-400 hover:!bg-rose-500  !py-2 !px-2 rounded-md "
          >
            <MdDeleteForever className="!text-white !text-xl cursor-pointer" />
          </button>
          <button className="!bg-gray-400 hover:!bg-gray-500 !py-2 !px-2 rounded-md">
            <RiEditBoxFill className="!text-white !text-xl cursor-pointer" />
          </button>
        </div>
      ),
      Status:
        product.quantity > 0 ? (
          <button className="!bg-[#87de94] !text-white !px-6 !py-1 rounded-md">
            موجود
          </button>
        ) : (
          <button className="!bg-[#F8A7B4]">ناموجود</button>
        ),
      price: product.price || 0,
    })
  );

  if (status === "loading") {
    return (
      <div className="loading-container">
        <p>در حال بارگذاری محصولات...</p>
      </div>
    );
  }
  if (status === "failed") {
    return <p>خطا در دریافت محصولات: {error}</p>;
  }

  return (
    <div ref={ref}>
      <div>
        <ModalAddProduct
          isOpenModalAddProduct={isOpenModalAddProduct}
          setIsOpenModalAddProduct={setIsOpenModalAddProduct}
        />
      </div>
      <DataTable
        columns={columns}
        data={formattedProducts}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={productFilterOptions}
        extraAction={
          <ButtonAddNewProduct
            setIsOpenModalAddProduct={setIsOpenModalAddProduct}
          />
        }
      />
    </div>
  );
}
