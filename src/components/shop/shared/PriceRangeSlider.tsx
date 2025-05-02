import { Input } from "@chakra-ui/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useEffect, useState } from "react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange?: (values: [number, number]) => void;
  onApply?: (values: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  onChange,
  onApply,
}) => {
  const [values, setValues] = useState<[number, number]>([min, max]);
  const [minInput, setMinInput] = useState<string>(`از ${min} تومان`);
  const [maxInput, setMaxInput] = useState<string>(`تا ${max} تومان`);

  useEffect(() => {
    setValues([min, max]);
    setMinInput(`از ${min} تومان`);
    setMaxInput(`تا ${max} تومان`);
  }, [min, max]);

  const handleSliderChange = (newValues: number | number[]) => {
    if (Array.isArray(newValues)) {
      setValues(newValues as [number, number]);
      setMinInput(`از ${newValues[0]} تومان`);
      setMaxInput(`تا ${newValues[1]} تومان`);
      onChange?.(newValues as [number, number]);
    }
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinInput(value);
    const numValue = parseInt(value.replace(/[^\d]/g, ""));
    if (!isNaN(numValue) && numValue >= min && numValue <= values[1]) {
      setValues([numValue, values[1]]);
      onChange?.([numValue, values[1]]);
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxInput(value);
    const numValue = parseInt(value.replace(/[^\d]/g, ""));
    if (!isNaN(numValue) && numValue <= max && numValue >= values[0]) {
      setValues([values[0], numValue]);
      onChange?.([values[0], numValue]);
    }
  };

  const handleApply = () => {
    onApply?.(values);
  };

  const middleValue = Math.floor((values[0] + values[1]) / 2);

  return (
    <div className="px-4 py-2">
      <div className="flex gap-4 !p-4">
        <Input
          value={minInput}
          onChange={handleMinInputChange}
          placeholder={`از ${min} تومان`}
          _placeholder={{ fontSize: "2px" }}
          className="!text-right"
        />
        <Input
          value={maxInput}
          onChange={handleMaxInputChange}
          placeholder={`تا ${max} تومان`}
          _placeholder={{ fontSize: "2px" }}
          className="!text-right"
        />
      </div>
      <div className="relative">
        <Slider
          range
          min={min}
          max={max}
          value={values}
          onChange={handleSliderChange}
          step={50}
          trackStyle={[{ backgroundColor: "#26B9B0" }]}
          handleStyle={[
            { backgroundColor: "#26B9B0", borderColor: "#26B9B0" },
            { backgroundColor: "#26B9B0", borderColor: "#26B9B0" },
          ]}
          railStyle={{ backgroundColor: "#e9e9e9" }}
        />
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md">
          <span className="text-sm text-gray-600">{middleValue} تومان</span>
        </div>
      </div>
      <button
        onClick={handleApply}
        className="mt-4 w-full bg-[#26B9B0] text-white py-2 rounded-md hover:bg-[#1f9c94] transition-colors"
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default PriceRangeSlider;
