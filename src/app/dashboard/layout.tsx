"use client";

import { useState } from "react";
import SideNavigation from "./_components/SideNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menu, setMenu] = useState(true);
  return (
    <div className="pt-16 lg:pt-0 lg:flex min-h-[100vh]">
      <div
        className={`fixed top-0 lg:top-auto lg:relative basis-[280px] shrink-0 bg-slate-800 transition ${
          menu ? "" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <SideNavigation />
        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="lg:hidden p-4 rounded-r-full absolute left-full top-2 bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="min-w-0 grow">
        <div className="container px-4 py-2 mx-auto">{children}</div>
      </div>
    </div>
  );
}
