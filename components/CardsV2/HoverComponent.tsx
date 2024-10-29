"use client";
import React from "react";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

interface hoverProps {
  data: any;
}

const HoverComponent: React.FC<hoverProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  function handleModal() {
    setOpenModal(true);
  }
  return (
    <div className="absolute w-full rounded-3xl md:h-[40rem] bg-zinc-800 z-20 opacity-0 hover:opacity-100 transition duration-100">
      <button
        onClick={handleModal}
        className="flex flex-col justify-center items-center w-full h-full"
      >
        {data.category}
      </button>
      {openModal && <ModalComponent setOpenModal={setOpenModal} data={data} />}
    </div>
  );
};

export default HoverComponent;
