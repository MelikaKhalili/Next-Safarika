import { Dispatch, SetStateAction } from "react";

export interface Product {
  id: string;
  TourName: string;
  Category?: string;
  Tourleader?: string;
  Quantity: number;
  Price: number;
  Image?: string[];
  Status?: string;
  startTravelDataTime?: string;
  EndTravelDataTime?: string;
  Los?: string;
  Transportation?: string;
  CancleRulesTour?: string;
}

export interface ModalAddProductProps {
  isOpenModalAddProduct: boolean;
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
  refreshList: () => void;
  editingProduct: Product | null;
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  setEditingProduct: Dispatch<SetStateAction<Product | null>>;
}

export interface AddProductFormProps {
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
}

export interface ButtonAddNewProductProps {
  setIsOpenModalAddProduct: Dispatch<SetStateAction<boolean>>;
  editingProduct: Product | null;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  setEditingProduct: Dispatch<SetStateAction<Product | null>>;
  isEditMode: boolean;
}
