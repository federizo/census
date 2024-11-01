"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Card } from "./ui/card";
const BottomDetails = () => {
  const { theme, setTheme } = useTheme();

  const barangays = [
    {
      title: "Mag-Asawang Sapa, Santa Maria",
      Src: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/308642979_159020213477335_3427730989438843461_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHhLCzTmD48HU-cN2zFgOStU6frlRiqbeVTp-uVGKpt5eR_QCaFJFBhEV0GzfjgpsZ8ex1k9RMGNgNZ_8SlD4jw&_nc_ohc=cQjYlnYbPpMQ7kNvgGWT0GJ&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=ACMKHj5jvF-4n3dDPYuHxNb&oh=00_AYDvKcfob3E7ZzfDDdPlKlSDtllLN5E8eJIpMbpGllXS_g&oe=6729E050",
      map: "https://maps.app.goo.gl/j8BZPYCREUPg51Xt9",
    },
    {
      title: "Tigbe, Norzagaray, Bulacan",
      Src: "https://jepepips.wordpress.com/wp-content/uploads/2014/09/img_9213.jpg",
      map: "https://maps.app.goo.gl/quPLWo7wcgX6EMD16",
    },
    {
      title: "Silangan, Santa Maria, Bulacan",
      Src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Jf3448Silangan_Hall_Santa_Maria_Bulacanfvf_27.JPG",
      map: "https://maps.app.goo.gl/VSRu6Xj8Cf1bKfzb6",
    },
    {
      title: "Balasing, Santa Maria, Bulaca",
      Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pandi_Church.jpg/760px-Mapcarta.jpg",
      map: "https://maps.app.goo.gl/TzFx2842LW4k6QvS8",
    },
    {
      title: "Caypombo, Santa Maria, Bulacan",
      Src: " https://photos.wikimapia.org/p/00/00/82/62/94_big.jpg",
      map: "https://maps.app.goo.gl/K898Ev8Ke8XcN6GS8",
    },
  ];

  return (
    <div className="w-full h-full xl:flex flex-col xl:py-[5rem]">
      <div className="flex items-center w-full justify-center mt-10">
        <div className="w-[70%] h-[1px] bg-slate-800" />
      </div>
      <div className="py-10">
        <div className="flex flex-col w-100 text-[2rem] font-semibold items-center">
          <h1>Adjacent Barangays</h1>
        </div>

        <div className="mt-5 flex w-full items-center justify-center gap-10">
          {barangays.map((item, index) => (
            <div
              onClick={() => window.open(item.map, "")}
              key={index}
              style={{
                backgroundImage: `url(${item.Src})`,
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                backgroundColor: "hsl(var(--background))",
              }}
              className="group bg-cover hover:bg-left bg-center bg-no-repeat h-[200px] w-[200px] bg-slate-600 flex justify-center items-end hover:scale-110 duration-300 cursor-pointer rounded-md"
            >
              <div className="p-2 font-semibold backdrop-blur-[1px] bg-black bg-opacity-40 group-hover:text-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BottomDetails;
