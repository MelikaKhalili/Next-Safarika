"use client";
import { Product } from "@/components/dash/products/types";
import { useState } from "react";
import ProductGuide from "./ProductGuide";
import ProductGuideMini from "./ProductGuideMini";

interface ProductGuideWithToggleProps {
  products: Product[];
  gridRows?: number;
}

export default function ProductGuideWithToggle({
  products,
  gridRows,
}: ProductGuideWithToggleProps) {
  const [viewMode, setViewMode] = useState<"regular" | "mini">("regular");

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("regular")}
            className={`px-4 py-2 rounded-md text-sm ${
              viewMode === "regular"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            نمایش معمولی
          </button>
          <button
            onClick={() => setViewMode("mini")}
            className={`px-4 py-2 rounded-md text-sm ${
              viewMode === "mini"
                ? "bg-white shadow-md text-blue-600"
                : "text-gray-600"
            }`}
          >
            نمایش مینی
          </button>
        </div>
      </div>

      {viewMode === "regular" ? (
        <ProductGuide products={products} gridRows={gridRows} />
      ) : (
        <ProductGuideMini products={products} gridRows={gridRows} />
      )}
    </div>
  );
}
