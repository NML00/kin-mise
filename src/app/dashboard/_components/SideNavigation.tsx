"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathName = usePathname();
  return (
    <div className="py-4 px-2 h-full">
      <Link
        className={`py-2 block px-4 rounded font-semibold ${
          pathName === "/dashboard/users" ? "text-slate-600 bg-white" : ""
        }`}
        href="/dashboard/users"
      >
        Users
      </Link>
      <Link
        className={`py-2 block px-4 rounded font-semibold ${
          pathName === "/dashboard/staffs" ? "text-slate-600 bg-white" : ""
        }`}
        href="/dashboard/staffs"
      >
        Staff
      </Link>
      <Link
        className={`py-2 block px-4 rounded font-semibold ${
          pathName === "/dashboard/vendors" ? "text-slate-600 bg-white" : ""
        }`}
        href="/dashboard/vendors"
      >
        Vendors
      </Link>
      <Link
        className={`py-2 block px-4 rounded font-semibold ${
          pathName === "/dashboard/gold-price" ? "text-slate-600 bg-white" : ""
        }`}
        href="/dashboard/gold-price"
      >
        Gold price
      </Link>
    </div>
  );
}
