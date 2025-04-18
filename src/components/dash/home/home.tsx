"use client";
import SalesChart from "../shared/chart/Chart";
import SalesBarChart from "../shared/salesbarchart/SalesBarChart";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div
        style={{ backgroundColor: "var(--color-four)" }}
        className="rounded-xl p-4 flex justify-center items-center"
      >
        <SalesChart />
      </div>
      <div
        style={{ backgroundColor: "var(--color-four)" }}
        className="rounded-xl p-4 flex justify-center items-center"
      >
        <SalesBarChart />
      </div>
    </div>
  );
}
