import { Dispatch, SetStateAction } from "react";

export interface AddProductModalProps {
  isOpenModalAddProduct: boolean;
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
}
