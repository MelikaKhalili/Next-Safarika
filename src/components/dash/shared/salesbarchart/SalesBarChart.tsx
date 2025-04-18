"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "هفته اول", فروش: 400 },
  { name: "هفته دوم", فروش: 700 },
  { name: "هفته سوم", فروش: 650 },
  { name: "هفته چهارم", فروش: 850 },
];

const SalesBarChart = () => {
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
    >
      <h2 className="text-xl font-bold text-[#2C3E50] mb-4">
        نمودار فروش ماه جاری
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="فروش" fill="#2980B9" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;
