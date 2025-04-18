import moment from "jalali-moment";
import { TabelCellProps } from "../types";
import "./TableCell.css";

export default function TableCell({ paginatedData, columns }: TabelCellProps) {
  if (!paginatedData) {
    return (
      <tbody
        style={{
          backgroundColor: "var(--color-four)",
          color: "var(--color-secondary)",
        }}
      >
        <tr>
          <td colSpan={columns.length} className="text-center py-4">
            در حال بارگذاری...
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody
      style={{
        backgroundColor: "var(--color-four)",
        color: "var(--color-secondary)",
      }}
    >
      {paginatedData.length === 0 ? (
        <tr>
          <td colSpan={columns.length} className="text-center py-4">
            هیچ داده‌ای یافت نشد
          </td>
        </tr>
      ) : (
        paginatedData.map((row, rowIndex) => (
          <tr key={rowIndex} className="Hoveredtr border-t cursor-pointer">
            {columns.map((column) => {
              const cellValue = row[column.accessor];
              console.log(rowIndex);

              if (column.accessor === "ProductImg") {
                const imageUrl =
                  typeof cellValue === "string"
                    ? cellValue.startsWith("http")
                      ? cellValue
                      : `http://${cellValue}`
                    : "";

                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={`product-${rowIndex}`}
                        style={{ width: 40, height: 40, objectFit: "cover" }}
                        className="m-auto rounded-md"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">بدون تصویر</span>
                    )}
                  </td>
                );
              }

              if (column.accessor === "deliveryDate") {
                const date = cellValue ? new Date(cellValue["$date"]) : null;
                const formattedDate = date
                  ? moment(date).locale("fa").format("YYYY/MM/DD")
                  : "نامشخص";
                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    {formattedDate}
                  </td>
                );
              }

              if (typeof cellValue === "number") {
                const formattedNumber = new Intl.NumberFormat("fa-IR").format(
                  cellValue
                );

                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    {formattedNumber}
                  </td>
                );
              }

              if (column.accessor === "Activity") {
                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    <button
                      style={{
                        backgroundColor: "var(--color-secondary)",
                        color: "var(--color-accent)",
                      }}
                      className="!py-1 !px-6 !rounded-md"
                    >
                      {cellValue}
                    </button>
                  </td>
                );
              }

              return (
                <td
                  key={column.accessor as string}
                  className="px-4 py-2 whitespace-nowrap text-center"
                >
                  {typeof cellValue === "string" ||
                  typeof cellValue === "number" ? (
                    <span className="block truncate">{String(cellValue)}</span>
                  ) : (
                    <div className="flex justify-center items-center h-full">
                      {cellValue}
                    </div>
                  )}
                </td>
              );
            })}
          </tr>
        ))
      )}
    </tbody>
  );
}
