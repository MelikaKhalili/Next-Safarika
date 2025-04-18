import { ButtonAddNewProductProps } from "../types";

export default function ButtonAddNewProduct({
  setIsOpenModalAddProduct,
}: ButtonAddNewProductProps) {
  return (
    <div>
      <button
        style={{ backgroundColor: "var(--color-primary)" }}
        onClick={() => setIsOpenModalAddProduct(true)}
        className=" !text-white !px-8 !py-2  !text-sm cursor-pointer rounded-3xl"
      >
        افزودن محصول
      </button>
    </div>
  );
}
