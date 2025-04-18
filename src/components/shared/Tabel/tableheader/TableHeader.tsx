import { TableHeaderProps } from "../types";
export default function TableHeader({
  columns,
  handleSort,
  sortConfig,
}: TableHeaderProps) {
  return (
    <>
      <thead>
        <tr
          style={{ backgroundColor: "var(--color-secondary)" }}
          className=" text-[#F9F9F9]"
        >
          {columns.map((column) => (
            <th
              key={column.accessor as string}
              className="px-4 py-2 text-left cursor-pointer truncate !font-semibold"
              onClick={() =>
                column.sortable ? handleSort(column.accessor) : undefined
              }
            >
              {column.Header}
              {sortConfig.key === column.accessor && (
                <span className="ml-1">
                  {sortConfig.direction === "asc" ? "▲" : "▼"}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
