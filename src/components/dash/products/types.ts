import { Dispatch, SetStateAction } from "react";

export interface ModalAddProductProps {
  isOpenModalAddProduct: boolean;
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
}
export interface AddProductFormProps {
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
}
export interface ButtonAddNewProductProps {
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
}
