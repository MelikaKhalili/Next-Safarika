import { AppDispatch } from "@/app/store/store";
import EditableText from "@/components/shared/EditableText";
import { BASE_URL } from "@/constant/config";
import { fetchOrders, updateOrder } from "@/features/orders/ordersSlice";
import {
  fetchProducts,
  updateProduct,
} from "@/features/products/productsSlice";
import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TabelCellProps } from "../types";
import "./TableCell.css";

export default function TableCell({ paginatedData, columns }: TabelCellProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [localData, setLocalData] = useState(paginatedData);

  useEffect(() => {
    setLocalData(paginatedData);
  }, [paginatedData]);

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
      {localData.length === 0 ? (
        <tr>
          <td colSpan={columns.length} className="text-center py-4">
            هیچ داده‌ای یافت نشد
          </td>
        </tr>
      ) : (
        localData.map((row, rowIndex) => (
          <tr key={rowIndex} className="Hoveredtr border-t cursor-pointer">
            {columns.map((column) => {
              const cellValue = row[column.accessor];

              if (column.accessor === "ProductImg") {
                console.log(cellValue);
                const imageUrl =
                  typeof cellValue === "string"
                    ? cellValue.startsWith("http")
                      ? cellValue
                      : `${BASE_URL}${cellValue}`
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

              if (column.accessor === "Price") {
                const priceValue =
                  typeof cellValue === "string"
                    ? parseFloat(cellValue)
                    : cellValue || 0;
                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    <EditableText
                      value={priceValue}
                      type="number"
                      min={0}
                      max={1000000}
                      onSave={async (newValue) => {
                        const itemId = row.id;
                        if (itemId) {
                          const numericValue = Number(newValue);
                          if (!isNaN(numericValue)) {
                            try {
                              // Check if this is a product or an order
                              if (row.ProductName) {
                                // This is a product
                                await dispatch(
                                  updateProduct({
                                    id: itemId,
                                    price: numericValue,
                                  })
                                ).unwrap();
                                dispatch(fetchProducts());
                              } else {
                                // This is an order
                                await dispatch(
                                  updateOrder({
                                    id: itemId,
                                    price: numericValue,
                                  })
                                ).unwrap();
                                dispatch(fetchOrders());
                              }
                            } catch (error) {
                              console.error("Error updating price:", error);
                            }
                          }
                        }
                      }}
                    />
                  </td>
                );
              }

              if (
                column.accessor === "Quantity" ||
                column.accessor === "Availablequantity"
              ) {
                const quantityValue =
                  typeof cellValue === "string"
                    ? parseInt(cellValue)
                    : cellValue || 0;
                return (
                  <td
                    key={column.accessor as string}
                    className="px-4 py-2 whitespace-nowrap text-center"
                  >
                    <EditableText
                      value={quantityValue}
                      type="number"
                      min={0}
                      max={1000}
                      onSave={async (newValue) => {
                        const itemId = row.id;
                        if (itemId) {
                          const numericValue = Number(newValue);
                          if (!isNaN(numericValue)) {
                            try {
                              // Check if this is a product or an order
                              if (row.ProductName) {
                                // This is a product
                                await dispatch(
                                  updateProduct({
                                    id: itemId,
                                    quantity: numericValue,
                                  })
                                ).unwrap();
                                dispatch(fetchProducts());
                              } else {
                                // This is an order
                                await dispatch(
                                  updateOrder({
                                    id: itemId,
                                    quantity: numericValue,
                                  })
                                ).unwrap();
                                dispatch(fetchOrders());
                              }
                            } catch (error) {
                              console.error("Error updating quantity:", error);
                            }
                          }
                        }
                      }}
                    />
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
