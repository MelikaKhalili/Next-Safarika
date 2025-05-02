export interface IAddProductModalProps {
  isOpenModalAddProduct: boolean;
  setIsOpenModalAddProduct: (value: boolean) => void;
  refreshList: () => void;
  editingProduct: any | null;
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
  setEditingProduct: (value: any | null) => void;
}
