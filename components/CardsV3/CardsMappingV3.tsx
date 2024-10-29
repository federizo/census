import React from "react";


const Page: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full relative mt-44 gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-[500px] w-[320px] text-white relative group overflow-hidden hover:scale-105 duration-300 hover:bg-top border-solid border-2 border-gray-150 rounded-lg"
        >
          <img
            src={item.imageSrc}
            alt={item.title1}
            className="h-full w-full object-cover object-bottom absolute group-hover:h-[800px] group-hover:object-left-top duration-300"
          />
          <div className="hover:backdrop-blur-3xl w-full h-full absolute flex flex-col duration-500">
            <div className="p-7">
              <label
                className={`font-bold text-[2rem] uppercase ${
                  index === 1 || index === 2 ? "text-black" : "text-white"
                }`}
              >
                {item.title1}
              </label>
              <h2
                className={`font-semibold text-[2.5vh] mt-6 ${
                  index === 1 || index === 2 ? "text-black" : "text-white"
                }`}
              >
                {item.title2}
              </h2>
            </div>
            <div className="translate-x-full group-hover:translate-x-0 duration-300 delay-100 flex flex-col justify-between h-full mt-2">
              <p
                className={`px-7 w-[95%] ${index === 1 || index === 2 ? "text-black" : "text-white"}`}
              >
                {item.description}
              </p>
            </div>
            <label
              className={`flex gap-1 text-[2vh] font-semibold w-full justify-end px-5 mb-10 items-center delay-100 translate-y-[200px] group-hover:translate-y-0 duration-300 ${index === 1 || index === 2 ? "text-black" : "text-white"}`}
            >
              See More
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    title1: "PB Census",
    title2: "Pulong Buhangin Census Management System.",
    description:
      "The project PB Census is a Web-Based Census Management System that will optimize the census process by replacing manual data collection and entry with a digital solution.",
    href: "",
    imageSrc:
      "https://dynamicmedia.accenture.com/is/image/accenture/Metadata_image_Fortune_v1:rad-5x3?ts=1727448392184&fit=constrain&dpr=on,1&wid=1600",
  },
  {
    title1: "Census Graph",
    title2: "Pulong Buhangin Census of Population",
    description:
      "Through the PB Census Management System, personnels and officials will be able to visualize data population, sort demographics by various criteria.",
    href: "",
    imageSrc:
      "https://thumbs.dreamstime.com/z/population-growth-chart-graph-density-growing-stick-figure-simple-icons-vector-illustration-men-women-statistics-220810318.jpg",
  },
  {
    title1: "Digitalized Census Form",
    title2: "",
    description:
      "The digitize census management process in Barangay Pulong Buhangin will provide a more effective and reliable solution for data collection, storage, and analysis.",
    href: "",
    imageSrc:
      "https://nortal.com/wp-content/uploads/2023/11/oman-business-portal_hero-768x433.jpg",
  },
  {
    title1: "News",
    title2: "Updates from PB Census",
    description:
      "The project PB Census is a Web-Based Census Management System that will optimize the census process by replacing manual data collection and entry with a digital solution.",
    href: "",
    imageSrc:
      "https://dynamicmedia.accenture.com/is/image/accenture/Metadata_image_Fortune_v1:rad-5x3?ts=1727448392184&fit=constrain&dpr=on,1&wid=1600",
  },
];
export default Page;
