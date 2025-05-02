"use client";
import { useState } from "react";
import "./Tabel.css";
import FilterTabel from "./filter/filter";
import { useTableLogic } from "./hooks/useTableLogic";
import TableCell from "./tablecell/TableCell";
import TableFooter from "./tablefooter/TableFooter";
import TableHeader from "./tableheader/TableHeader";
import { DataTableProps } from "./types";
const DataTable = <T extends object>({
  columns,
  data,
  pageSize = 5,
  enableSearch = false,
  enableFilter = false,
  filterOption: externalFilterOption,
  setFilterOption: externalSetFilterOption,
  filterOptions = [],
  showFooter = true,
  extraAction,
}: DataTableProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState(externalFilterOption ?? "");
  const [currentPage, setCurrentPage] = useState(1);
  const activeFilterOption = externalFilterOption ?? filterOption;
  const updateFilterOption = externalSetFilterOption ?? setFilterOption;
  const { sortConfig, handleSort, totalPages, getPaginatedData } =
    useTableLogic<T>(data, searchTerm, activeFilterOption, pageSize);

  const paginatedData = getPaginatedData(currentPage);

  return (
    <div className="flex flex-col justify-center items-start gap-4  py-10">
      <FilterTabel
        showFooter={showFooter}
        enableFilter={enableFilter}
        updateFilterOption={updateFilterOption}
        filterOption={filterOption}
        filterOptions={filterOptions}
        enableSearch={enableSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCurrentPage={setCurrentPage}
        extraAction={extraAction}
      />
      <div className="relative rounded-2xl w-full">
        <table
          className="table-auto rounded-2xl overflow-hidden border-collapse w-full bg-white shadow-md"
          style={{ tableLayout: "fixed" }}
        >
          <colgroup>
            {columns.map((column, index) => (
              <col key={index} style={{ width: column.width || "auto" }} />
            ))}
          </colgroup>

          <TableHeader
            columns={columns}
            handleSort={handleSort}
            sortConfig={sortConfig}
          />

          <TableCell paginatedData={paginatedData} columns={columns} />
        </table>
      </div>
      {showFooter && (
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
export default DataTable;
