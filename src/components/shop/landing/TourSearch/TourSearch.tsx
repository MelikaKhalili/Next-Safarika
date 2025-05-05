"use client";
import { getProducts } from "@/api/userApi";
import { useEffect, useState } from "react";
import PriceRangeFilter from "../PriceRangeFilter/PriceRangeFilter";

interface Product {
  id: string;
  Category: string;
  Image?: string[];
  TourName: string;
  Price: number;
}

export default function TourSearch() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });

  const categoryList = [
    "تور داخلی",
    "تور خارجی",
    "تور شمال",
    "تور جنوب",
    "استاندارد تور",
    "تور یک روزه",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setAllProducts(data);
      const uniqueProducts = categoryList
        .map((category) => {
          return data.find((product: Product) => product.Category === category);
        })
        .filter((product): product is Product => product !== undefined);
      setFilteredProducts(uniqueProducts);
    };

    fetchData();
  }, []);

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    const filtered = allProducts.filter(
      (product) =>
        product.Price >= min &&
        product.Price <= max &&
        categoryList.includes(product.Category)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="!text-2xl !font-bold mb-8">دنبال چه توری میگردی؟</h1>
      <div className="w-full max-w-4xl mb-8">
        <PriceRangeFilter onPriceRangeChange={handlePriceRangeChange} />
      </div>
      <div className="grid grid-rows-2 grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            className="flex flex-col gap-4 bg-white p-4 rounded-md hover:shadow-md cursor-pointer"
            key={product.id}
          >
            {product?.Image?.[2] && (
              <img
                className="w-full !h-40 object-cover rounded-md"
                src={product.Image[2]}
                alt={product.TourName}
              />
            )}
            <p className="mt-2 text-center !text-md">{product.Category}</p>
            <p className="text-center text-green-600 font-semibold">
              {Number(product.Price).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
