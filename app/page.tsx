import Hero from "@/components/home/Hero";

import FloatingNavbar from "../components/home/FloatingNabvar";

import Footer from "@/components/footer";
import CardsMappingV3 from "@/components/CardsV3/CardsMappingV3";
import Map from "@/components/map";
import TableDetails from "@/components/table-details";
import BottomDetails from "@/components/bottom-details";
export default async function Index() {
  return (
    <div className="relative w-screen h-screen flex flex-col overflow-y-hidden ">
      <header className="flex overflow-hidden flex-col w-full">
        <FloatingNavbar />
      </header>

      <div className="z-0 w-full h-full overflow-y-auto items-center  grid-col overflow-hidden ">
        <Hero />
        <div className="px-[5rem] flex flex-col">
          <CardsMappingV3 />
          <Map />
          <TableDetails />
          <BottomDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
}
