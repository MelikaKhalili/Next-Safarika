"use client";
import Link from "next/link";

interface ViewAllButtonProps {
  className?: string;
  href: string;
}

export default function ViewAllButton({
  href,
  className = "",
}: ViewAllButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ${className}`}
    >
      مشاهده همه
    </Link>
  );
}
