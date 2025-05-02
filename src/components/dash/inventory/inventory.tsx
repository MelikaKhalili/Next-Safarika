"use client";
import { deleteProductById } from "@/api/userApi";
import { AppDispatch, RootState } from "@/app/store/store";
import DataTable from "@/components/shared/Tabel/DataTabel";
import showDeleteModal from "@/components/shared/modal/modaldelete/modaldelete";
import ModalAddProduct from "@/components/shared/modal/modalproduct/modaladd";
import { fetchProducts } from "@/features/products";
import { Product } from "@/features/products/types";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

const InventorySection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterOption, setFilterOption] = useState("");
  const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    items: products = [],
    status,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProductById(id);
      dispatch(fetchProducts());
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error; // Re-throw the error so the modal can handle it
    }
  };

  const inventoryFilterOptions = [
    { value: "price", label: "قیمت" },
    { value: "brand", label: "برند" },
    { value: "category", label: "دسته‌بندی" },
  ];

  const columns = [
    { Header: "عکس محصول", accessor: "ProductImg" as const, width: "100px" },
    { Header: "نام محصول", accessor: "ProductName" as const, width: "150px" },
    {
      Header: "تعداد موجود",
      accessor: "Availablequantity" as const,
      width: "100px",
    },
    { Header: "قیمت", accessor: "Price" as const, width: "100px" },
    { Header: "عملیات", accessor: "actions" as const, width: "100px" },
  ];

  const formattedOrders = products?.map((product: Product) => {
    const quantity =
      typeof product.Quantity === "string"
        ? parseFloat(product.Quantity) || 0
        : product.Quantity || 0;

    const price =
      typeof product.Price === "string"
        ? parseFloat(product.Price) || 0
        : product.Price || 0;

    return {
      id: product.id,
      ProductImg: product.Image?.[0] || "",
      ProductName: product.TourName || "نام ندارد",
      Category: product.category?.name || "بدون دسته",
      Organizer: product.brand || "نامشخص",
      Availablequantity: quantity,
      Status: product.status || "نامشخص",
      Price: price,
      actions: (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() =>
              showDeleteModal(() => handleDeleteProduct(product.id), {
                title: "آیا اطمینان دارین از حذف کردن این محصول؟",
                text: "این عملیات قابل بازگشت نیست!",
                successTitle: "حذف شد!",
                successText: "محصول با موفقیت حذف شد.",
                errorTitle: "خطا!",
                errorText: "در حین حذف محصول مشکلی پیش آمد.",
              })
            }
            className="!bg-red-500 hover:!bg-red-600 py-2 px-2 rounded-md"
          >
            <MdDelete className="!text-white cursor-pointer" />
          </button>
          <button
            onClick={() => {
              setEditingProduct(product);
              setIsEditMode(true);
              setIsOpenModalAddProduct(true);
            }}
            className="!bg-yellow-400 hover:!bg-yellow-500 py-2 px-2 rounded-md"
          >
            <RiEditBoxFill className="!text-white cursor-pointer" />
          </button>
        </div>
      ),
    };
  });

  if (status === "loading") {
    return (
      <div className="fixed top-0 right-0 z-[9999] bg-black/70 w-screen h-screen flex justify-center items-center">
        <FadeLoader color="white" />
      </div>
    );
  }

  if (status === "failed") {
    return <p>خطا در دریافت محصولات: {error}</p>;
  }

  return (
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
      <DataTable
        columns={columns}
        data={formattedOrders}
        enableSearch={true}
        enableFilter={true}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptions={inventoryFilterOptions}
        showFooter={true}
      />
    </div>
  );
};

export default InventorySection;
