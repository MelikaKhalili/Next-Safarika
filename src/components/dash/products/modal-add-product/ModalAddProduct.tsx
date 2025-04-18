import { useInView } from "framer-motion";
import { useRef } from "react";
import { ModalAddProductProps } from "../types";
import AddTourProductForm from "./addproductform/AddTourProductForm";

export default function ModalAddProduct({
  isOpenModalAddProduct,
  setIsOpenModalAddProduct,
}: ModalAddProductProps) {
  return (
    <div>
      {isOpenModalAddProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30 h-screen">
          <div className="w-[80vw] h-[80vh] mt-10 bg-white p-8 rounded-xl shadow-md overflow-y-auto max-h-screen">
            <AddTourProductForm
              setIsOpenModalAddProduct={setIsOpenModalAddProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
}
