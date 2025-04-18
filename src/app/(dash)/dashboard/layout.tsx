import HeaderDashboard from "@/components/dash/shared/header/headerDashboard";
import SideBar from "@/components/dash/shared/sideBar/sideBar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="!w-screen !h-screen bg-opacity-50 backdrop-blur-sm !grid !grid-cols-[350px_1fr]">
      <SideBar />
      <div className="flex flex-col h-full">
        <HeaderDashboard />
        <main className="p-8 overflow-y-auto h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
