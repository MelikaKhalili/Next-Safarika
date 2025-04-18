import { useMemo, useState } from "react";

export const useTableLogic = <T extends object>(
  data: T[],
  searchTerm: string,
  filterOption: string,
  pageSize: number
) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });

  const handleSort = (accessor: keyof T) => {
    setSortConfig((prev) => ({
      key: accessor,
      direction:
        prev.key === accessor && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    let sorted = [...filteredData];

    if (filterOption === "price") {
      sorted.sort((a, b) => (b["price"] as number) - (a["price"] as number));
    } else if (filterOption === "brand") {
      sorted.sort((a, b) => {
        const brandA = a["Organizer"]?.toString()?.toLowerCase() || "";
        const brandB = b["Organizer"]?.toString()?.toLowerCase() || "";
        return brandA.localeCompare(brandB);
      });
    } else if (filterOption === "category") {
      sorted.sort((a, b) => {
        const categoryA = a["Category"]?.toString()?.toLowerCase() || "";
        const categoryB = b["Category"]?.toString()?.toLowerCase() || "";
        return categoryA.localeCompare(categoryB);
      });
    } else if (filterOption === "Deliverystatus") {
      sorted = sorted.filter((row) => {
        const status = row["Deliverystatus"];
        if (status?.type) {
          return status.type.name === "AiOutlineCheckCircle";
        }

        return status === true;
      });
    }

    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue === undefined || bValue === undefined) return 0;

        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return sorted;
  }, [filteredData, filterOption, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const getPaginatedData = (currentPage: number) =>
    sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return {
    handleSort,
    sortConfig,
    totalPages,
    getPaginatedData,
    sortedData,
  };
};
