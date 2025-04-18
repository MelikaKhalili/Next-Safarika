import { TableFooterProps } from "../types";
export default function TableFooter({
  currentPage,
  totalPages,
  setCurrentPage,
}: TableFooterProps) {
  return (
    <div className="flex justify-center items-center gap-8 w-full">
      <span
        style={{ color: "var(--color-secondary)" }}
        className="whitespace-nowrap"
      >
        صفحه {currentPage} از {totalPages}
      </span>
      <div className="flex gap-6">
        <button
          style={{
            outline: "2px solid var(--color-secondary)",
            color: "var(--color-secondary)",
          }}
          className=" !px-8 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          قبلی
        </button>

        <button
          style={{
            outline: "2px solid var(--color-secondary)",
            color: "var(--color-secondary)",
          }}
          className="!px-8 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <label
          style={{ color: "var(--color-secondary)" }}
          htmlFor="goToPage"
          className="text-sm"
        >
          برو به صفحه:
        </label>
        <input
          id="goToPage"
          type="number"
          min={1}
          max={totalPages}
          className="rounded px-4 w-20 text-center border border-transparent border-b-0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const page = parseInt(e.currentTarget.value);
              if (!isNaN(page) && page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }
          }}
        />
      </div>
    </div>
  );
}
