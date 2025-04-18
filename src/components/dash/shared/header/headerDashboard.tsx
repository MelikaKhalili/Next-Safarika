"use client";
import { IoIosSettings } from "react-icons/io";

export default function HeaderDashboard() {
  return (
    <div
      style={{ backgroundColor: "var(--color-primary)" }}
      className="h-28 shadow-[0_5px_15px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.30)]  flex items-center justify-between p-4"
    >
      <span style={{ color: "var(--color-four)" }} className=" text-lg">
        سلام ملیکا جان، به پنل ادمین خوش‌آمدید.
      </span>
      <div
        style={{
          backgroundColor: "var(--color-secondary)",
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IoIosSettings className="text-white !w-8 !h-8" />
      </div>
    </div>
  );
}
