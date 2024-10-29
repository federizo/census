"use client";
import React from "react";
import { useTheme } from "next-themes";

import { FaWpforms } from "react-icons/fa";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="xl:flex grid gap-2 w-full py-10 border-t-[1px] border-b-[1px] xl:px-[5rem] px-[2rem] z-0 ">
      <div className="flex flex-col w-full text-[5rem] ">
        <h1>Pulong Buhangin</h1>
        <h1 className="xl:translate-x-1/2 items-center flex gap-3">
          <FaWpforms className="text-[50px]" />
          Census
        </h1>
      </div>
      <div className="flex xl:w-[50%] w-full relative ">
        <div className="xl:absolute bottom-0 flex flex-col gap-2 ">
          <div
            className={`h-[3px] w-[100px] p-[2px] ${
              theme === "light" ? "bg-black" : "bg-white"
            }`}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero?
          Deleniti tempora sint aut necessitatibus nam quibusdam error fugit!
          Temporibus molestias officia enim impedit ut ex dolorem magnam
          similique, a qui, rem illo neque exercitationem debitis odit. Sequi,
          natus ex recusandae necessitatibus fuga sunt reprehenderit deserunt
          eius. Iusto cum eos nesciunt.
        </div>
      </div>
    </div>
  );
};

export default Hero;