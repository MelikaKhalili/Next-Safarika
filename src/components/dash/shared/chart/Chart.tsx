"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "فروردین", "۱۴۰۳": 400, "۱۴۰۴": 640 },
  { name: "اردیبهشت", "۱۴۰۳": 700, "۱۴۰۴": 120 },
  { name: "خرداد", "۱۴۰۳": 434, "۱۴۰۴": 576 },
  { name: "تیر", "۱۴۰۳": 324, "۱۴۰۴": 950 },
];

const SalesChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--color-accent)",
        borderRadius: "6px",
        border: "3px",
        borderColor: "var(--color-secondary)",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="flex flex-col w-full gap-4"
    >
      <div>
        <h2 className="font-bold text-[#2C3E50] text-sm">
          نمودار فروش شش ماه اول سال
        </h2>
      </div>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="۱۴۰۳"
              stroke="#2980B9"
              strokeWidth={2}
              name="فروش ۱۴۰۳"
            />
            <Line
              type="monotone"
              dataKey="۱۴۰۴"
              stroke="#E74C3C"
              strokeWidth={2}
              name="فروش ۱۴۰۴"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex  gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#2980B9]"></div>
          <span className="text-sm text-[#2C3E50]">فروش ۱۴۰۳</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#E74C3C]"></div>
          <span className="text-sm text-[#2C3E50]">فروش ۱۴۰۴</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
