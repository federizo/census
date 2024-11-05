import React from "react";
import BarChart from "@/components/barchart";
import Navbar from "@/components/navbar";
import DashboardLayout from "@/components/admin/components/Dashboard";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function page() {
  return (
    <div className="relative w-screen h-screen flex flex-col gap-12 overflow-x-hidden">
      <div className="w-full h-full">
        <Navbar />

          <div className="md:w-flex mt-20">
            <Link
              href="/"
              className={`text-sm flex items-center gap-2 text-gray-800 dark:text-white hover:underline`}
            >
              <IoMdArrowRoundBack className="text-[40px]" />
              <span>Back</span>
            </Link>
            <BarChart />
          </div>
        </div>
      </div>
     
  );
}
