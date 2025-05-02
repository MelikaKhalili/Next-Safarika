"use client";
import { deleteProductById } from "@/api/userApi";
import DataTable from "@/components/shared/Tabel/DataTabel";
import showDeleteModal from "@/components/shared/modal/modaldelete/modaldelete";
import ModalAddProduct from "@/components/shared/modal/modalproduct/modaladd";
import { fetchProducts } from "@/features/products/productsSlice";
import { addToApi } from "@/functionproduct";
import { Button } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import type { AppDispatch, RootState } from "../../../app/store/store";
import ButtonAddNewProduct from "./buttonaddnewproduct/buttonAddNewProduct";
import "./productsSection.css";
import { Product } from "./types";
export default function ProductsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const [filterOption, setFilterOption] = useState("");
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);
  const ref = useRef(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
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
    { Header: "عکس محصول", accessor: "ProductImg" as const, width: "100px" },
    { Header: "نام محصول", accessor: "ProductName" as const, width: "150px" },
    { Header: "دسته بندی", accessor: "Category" as const, width: "120px" },
    { Header: "برگزارکننده", accessor: "Organizer" as const, width: "120px" },
    {
      Header: "تعداد موجود",
      accessor: "Availablequantity" as const,
      width: "100px",
    },
    { Header: "وضعیت", accessor: "Status" as const, width: "100px" },
    { Header: "قیمت", accessor: "Price" as const, width: "100px" },
    { Header: "عملیات", accessor: "actions" as const, width: "100px" },
  ];

  const formattedProducts = products?.map((product: Product) => {
    const Availablequantity =
      typeof product.Quantity === "string"
        ? parseInt(product.Quantity)
        : product.Quantity || 0;

    const price =
      typeof product.Price === "string"
        ? parseFloat(product.Price)
        : product.Price || 0;

    return {
      id: product.id,
      ProductImg: product.Image?.[0] || "",
      ProductName: product.TourName || "نام ندارد",
      Category: product.Category || "بدون دسته",
      Organizer: product.Tourleader || "نامشخص",
      Availablequantity: Availablequantity,
      Quantity: Availablequantity,
      Price: price,
      actions: (
        <div className="flex gap-2 justify-center w-full">
          <button
            onClick={() =>
              showDeleteModal(() => handleDeleteProduct(product.id))
            }
            className="!bg-rose-400 hover:!bg-rose-500  !py-2 !px-2 rounded-md "
          >
            <MdDeleteForever className="!text-white !text-xl cursor-pointer" />
          </button>

          <button
            onClick={() => {
              setEditingProduct(product);
              setIsEditMode(true);
              setIsOpenModalAddProduct(true);
            }}
            className="!bg-gray-400 hover:!bg-gray-500 !py-2 !px-2 rounded-md"
          >
            <RiEditBoxFill className="!text-white !text-xl cursor-pointer" />
          </button>
        </div>
      ),
      Status: Availablequantity ? (
        <button className="!bg-[#87de94] !text-white !px-6 !py-1 rounded-md">
          موجود
        </button>
      ) : (
        <button className="!bg-[#F8A7B4]">ناموجود</button>
      ),
    };
  });

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProductById(id);
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
    <div ref={ref}>
      <div>
        <ModalAddProduct
          isOpenModalAddProduct={isOpenModalAddProduct}
          setIsOpenModalAddProduct={setIsOpenModalAddProduct}
          refreshList={() => dispatch(fetchProducts())}
          editingProduct={editingProduct}
          setIsEditMode={setIsEditMode}
          setEditingProduct={setEditingProduct}
          isEditMode={isEditMode}
        />
      </div>
      <Button bg={"red.500"} onClick={() => addToApi()}>
        Add Product To Api
      </Button>
      <DataTable
        columns={columns}
        data={formattedProducts}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={productFilterOptions}
        showFooter={true}
        extraAction={
          <ButtonAddNewProduct
            setIsOpenModalAddProduct={setIsOpenModalAddProduct}
            editingProduct={editingProduct}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            setEditingProduct={setEditingProduct}
          />
        }
      />
    </div>
  );
}
