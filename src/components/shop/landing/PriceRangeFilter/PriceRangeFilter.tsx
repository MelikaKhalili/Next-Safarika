"use client";
import { getProducts } from "@/api/userApi";
import { useEffect, useState } from "react";

interface PriceRangeFilterProps {
  onPriceRangeChange: (minPrice: number, maxPrice: number) => void;
}

export default function PriceRangeFilter({
  onPriceRangeChange,
}: PriceRangeFilterProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [currentMin, setCurrentMin] = useState(0);
  const [currentMax, setCurrentMax] = useState(10000000);

  useEffect(() => {
    const fetchPrices = async () => {
      const products = await getProducts();
      const prices = products.map((product: any) => product.Price || 0);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setMinPrice(min);
      setMaxPrice(max);
      setCurrentMin(min);
      setCurrentMax(max);
    };

    fetchPrices();
  }, []);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value <= currentMax) {
      setCurrentMin(value);
      onPriceRangeChange(value, currentMax);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= currentMin) {
      setCurrentMax(value);
      onPriceRangeChange(currentMin, value);
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">فیلتر بر اساس قیمت</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            حداقل قیمت: {currentMin.toLocaleString()} تومان
          </span>
          <span className="text-sm text-gray-600">
            حداکثر قیمت: {currentMax.toLocaleString()} تومان
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={currentMin}
            onChange={handleMinChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={currentMax}
            onChange={handleMaxChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
