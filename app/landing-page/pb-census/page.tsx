"use client";
import React from "react";
import { useTheme } from "next-themes";

import { FaWpforms } from "react-icons/fa";
import FloatingNavbar from "@/components/home/FloatingNabvar";

const PBCensus = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative w-screen h-screen flex flex-col overflow-y-hidden">
      <FloatingNavbar />
      <div className="xl:flex grid gap-2 w-full py-10 border-t-[1px] border-b-[1px] xl:px-[5rem] px-[2rem] z-0 ">
        <div className="flex flex-col w-full text-[5rem] ">
          <h1>PB Census</h1>
          <p className="xl:translate-x-1 items-center flex gap-3 text-[2rem]">
            Pulong Buhangin Census Management System
          </p>
        </div>
        <div className="flex xl:w-[50%] w-full relative ">
          {/* <div className="xl:absolute bottom-0 flex flex-col gap-2 ">
            <div
              className={`h-[3px] w-[100px] p-[2px] ${
                theme === "light" ? "bg-black" : "bg-white"
              }`}
            />
            The PB Census System is a web-based platform designed to support
            census management in Barangay Pulong Buhangin, enhancing data
            collection, accuracy, and accessibility with features for data
            visualization and analysis to aid barangay officials in
            decision-making.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PBCensus;
