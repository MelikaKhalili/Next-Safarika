import { Dispatch, SetStateAction } from "react";

export interface FilterTabelProps {
  enableFilter: boolean;
  updateFilterOption: (val: string) => void;
  filterOption: string;
  filterOptions: {
    value: string | number;
    label: string;
  }[];
  enableSearch: boolean;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
export interface TableHeaderProps {
  columns: Column<T>[];
  handleSort: (accessor: keyof T) => void;
  sortConfig: {
    key: keyof T | null;
    direction: "asc" | "desc";
  };
}
export interface TabelCellProps {
  paginatedData: T[];
  columns: Column<T>[];
}
export interface TableFooterProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
// src/types/interfaces.ts
export interface Column<T> {
  width: string;
  Header: string;
  accessor: keyof T;
  sortable?: boolean;
  filterable?: boolean;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  pageSize?: number;
  enableSearch?: boolean;
  enableFilter?: boolean;
  filterOption?: string;
  setFilterOption?: (val: string) => void;
  filterOptions?: { value: string | number; label: string }[];
  extraAction?: React.ReactNode;
  showFooter: boolean;
}
