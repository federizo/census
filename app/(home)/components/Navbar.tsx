"use client";
import { ThemeSwitcher } from "@/components/theme-switcher";
import React from "react";
import Image from "next/image";
import PB from "../../assets/PB.png";
import PBInverted from "../../assets/PBinverted.png";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-transparent-100 mx-auto">
      <div className="w-full max-w-5xl flex justify-between items-center p-3">
        <div className="flex justify-center items-center gap-2">
          <div className="">
            <Image
              src={theme === "dark" ? PBInverted : PB}
              className="h-7 w-6"
              alt="PB Logo"
            />
          </div>
          <h1 className="font-semibold">PB Census</h1>
          <ThemeSwitcher />
        </div>
        <div className="flex justify-between gap-10  relative lg:col-span-8 ">
          <label className="inline-flex items-center justify-center whitespace-nowrap  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Home
          </label>

          <label className="inline-flex items-center justify-center whitespace-nowrap  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ">
            About
          </label>
        </div>
      </div>
    </nav>
  );
}
