"use client";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

interface HoverProps {
  data: any;
}

const HoverComponent: React.FC<HoverProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  function handleMouseEnter() {
    setOpenModal(true);
  }

  function handleMouseLeave() {
    setOpenModal(false);
  }

  return (
    <div
      className="absolute w-full h-full rounded-3xl bg-zinc-800 opacity-0 hover:opacity-100 transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {openModal && <ModalComponent setOpenModal={setOpenModal} data={data} />}
    </div>
  );
};

export default HoverComponent;
