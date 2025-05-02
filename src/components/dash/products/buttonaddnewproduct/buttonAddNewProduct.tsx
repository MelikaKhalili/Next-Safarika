import { ButtonAddNewProductProps } from "../types";

export default function ButtonAddNewProduct({
  setIsOpenModalAddProduct,
  editingProduct,
  setEditingProduct,
  isEditMode,
  setIsEditMode,
}: ButtonAddNewProductProps) {
  return (
    <div>
      <button
        style={{ backgroundColor: "var(--color-primary)" }}
        onClick={() => {
          setIsOpenModalAddProduct(true);
          setEditingProduct(null);
          setIsEditMode(false);
        }}
        className=" !text-white !px-8 !py-2  !text-sm cursor-pointer rounded-3xl"
      >
        افزودن محصول
      </button>
    </div>
  );
}
