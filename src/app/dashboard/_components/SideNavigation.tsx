"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathName = usePathname();
  return (
    <div className="py-4 px-2 h-full flex flex-col justify-between">
      <div>
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
            pathName === "/dashboard/gold-price"
              ? "text-slate-600 bg-white"
              : ""
          }`}
          href="/dashboard/gold-price"
        >
          Gold price
        </Link>
      </div>
      <div className="pt-16 lg:pb-16 lg:pt-0">
        <Link
          href="/login"
          className="bg-red-500 rounded block py-2 px-4 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="inline"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
            />
          </svg>
          Logout
        </Link>
      </div>
    </div>
  );
}
