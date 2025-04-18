"use client";
import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TbSearch } from "react-icons/tb";

export default function FilterTabel({
  enableFilter,
  updateFilterOption,
  filterOption,
  filterOptions,
  enableSearch,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
  extraAction,
}: FilterTabelProps) {
  const [isProductPage, setIsProductPage] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname.includes("/product")) {
        setIsProductPage(true);
      } else {
        setIsProductPage(false);
      }
    }
  }, []);

  return (
    <div
      className={`!flex w-full ${
        isProductPage ? "!justify-between" : "gap-10"
      }`}
    >
      {enableSearch && (
        <InputGroup width="24rem">
          <InputRightElement pointerEvents="none">
            <TbSearch style={{ color: "var(--color-secondary)" }} />
          </InputRightElement>
          <Input
            pr="3rem"
            style={{ backgroundColor: "var(--color-four)" }}
            className="!rounded-full shadow-md"
            type="text"
            placeholder="جستجوی تور"
            _placeholder={{ color: "var(--color-secondary)" }}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </InputGroup>
      )}
      {enableFilter && (
        <div className="relative w-60">
          <Select
            icon=""
            className="!w-full !rounded-full shadow-md"
            onChange={(e) => updateFilterOption(e.target.value)}
            value={filterOption}
            placeholder="مدیریت تور ها"
            color="var(--color-secondary)"
          >
            {filterOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <MdArrowDropDown
            style={{ color: "var(--color-secondary)" }}
            size={22}
            className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
      )}

      {extraAction && <div>{extraAction}</div>}
    </div>
  );
}
