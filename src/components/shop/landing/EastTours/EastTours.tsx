"use client";
import ProductCard from "@/components/shared/productcart";
import { getFilteredProducts } from "@/components/shared/productcart/FilteredProducts";
import { useEffect, useState } from "react";
import ViewAllButton from "../../ViewAllButton";
import LandingPageSwiper from "../LandingPageSwiper/LandingPageSwiper";

export default function EastTours() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const eastTourImages = [
    "https://api.youtopin.com/media/v1/tour/image/7963a3e7-5383-42c8-b267-9490323dcc28",
    "https://api.youtopin.com/media/v1/tour/image/64b19514-3ad1-4566-9a7c-f81d95489f9a",
    "https://api.youtopin.com/media/v1/tour/image/bbb63d9d-df96-41e0-a216-5fb31e81badc",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const testfilter = "تور شرق";
      const data = await getFilteredProducts("Category", testfilter);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <LandingPageSwiper
        title="تور های شرق سفریکا"
        description="با تورهای شرق ما، سفری به یادماندنی را تجربه کنید"
        images={eastTourImages}
        className="mb-8"
      />
      <div className="w-full flex justify-between">
        <h1 className="!text-2xl !font-bold ">تور های شرق سفریکا</h1>

        <ViewAllButton
          href="/products?Category=تور شرق"
          className="bg-white !border !border-[#26B9B0] !text-[#26B9B0] hover:!bg-[#26B9B0] hover:!text-white"
        />
      </div>
      <ProductCard products={filteredProducts} gridRows={2} />
    </div>
  );
}
