"use client";
import React from "react";
import Image from "next/image";
import map from "../app/assets/Map.jpg";

import { useTheme } from "next-themes";

const Map = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-full xl:relative border-t-[1px] ">
      <div className="xl:w-[50%] flex flex-col items-end py-10">
        <div className=" bottom-0 flex flex-col gap-2 xl:translate-x-1/2 items-center justify-center ">
          <Image src={map} alt="map.jpg" className="py-10 xl:w-full" />
          <div className="text-center">
            Pulong Buhangin is a barangay in the municipality of Santa Maria, in
            the province of Bulacan. Its population as determined by the 2020
            Census was 41,218. This represented 14.22% of the total population
            of Santa Maria.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Map;
