"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block">
      <div className="flex gap-4 items-center">
        <Link
          href={"/"}
          className={`px-3 py-2 rounded-md ${pathname === "/" ? "text-primary hover:text-gray-700" : "text-gray-700 hover:text-primary"} font-semibold transition-colors duration-200 hover:bg-blue-50`}
        >
          Home
        </Link>
        <Link
          href={"/dashboard"}
          className={`${pathname === "/dashboard" ? "text-primary hover:text-gray-700" : "text-gray-700 hover:text-primary"} px-3 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-blue-50`}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
