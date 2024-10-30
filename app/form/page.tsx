import React from "react";
import FloatingNavbar from "../(home)/components/FloatingNabvar";

const Page = () => {
  return (
    <div>
      <FloatingNavbar />
      <div className="w-full grid mx-auto min-h-screen py-10 ">
        <form className="w-full block mx-auto h-full px-6 md:px-0 overflow-x-hidden">
          <div className="flex md:flex-row flex-col justify-center items-center max-w-3xl mx-auto">
            <div className="border-t-8 rounded-md my-6 border-[#29A0B1] bg-white max-w-2xl shadow w-full grid place-items-center mx-auto"></div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Page;
