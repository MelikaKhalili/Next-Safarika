"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBoxes, FaClipboardList } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const menuItems = [
  { href: "/dashboard", label: "داشبورد", icon: <MdDashboard size={20} /> },
  {
    href: "/dashboard/products",
    label: "محصولات",
    icon: <FiShoppingBag size={20} />,
  },
  {
    href: "/dashboard/orders",
    label: "سفارش‌ها",
    icon: <FaClipboardList size={20} />,
  },
  {
    href: "/dashboard/inventory",
    label: "موجودی",
    icon: <FaBoxes size={20} />,
  },
];

export default function MenuItems() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {menuItems.map(({ href, label, icon }) => {
        const active = isActive(href);

        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center justify-between w-full rounded-md transition-all duration-200 p-3
              ${
                active
                  ? "!bg-[#607eaa] !text-white font-bold shadow"
                  : "hover:bg-red-100 !text-white/90"
              }`}
          >
            <span>{label}</span>
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
