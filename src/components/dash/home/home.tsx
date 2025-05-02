"use client";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import SalesChart from "../shared/chart/Chart";
import SalesBarChart from "../shared/salesbarchart/SalesBarChart";

export default function DashboardHome() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 1000);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {status && (
        <div className="fixed top-0 right-0 z-[9999] bg-black/70 w-screen h-screen flex justify-center items-center ">
          <FadeLoader color="white" />
        </div>
      )}
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
