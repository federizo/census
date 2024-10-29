import React from "react";
import { motion } from "framer-motion";

interface modalprops {
  setOpenModal: React.SetStateAction<any>;
  data: any;
}

const ModalComponent: React.FC<modalprops> = ({ setOpenModal, data }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen transition duration-150 bg-black backdrop-blur-sm bg-opacity-20 fixed inset-0 z-50">
      <motion.div
        initial={{ opacity: 0, translateY: -400 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        className="bg-zinc-700 w-[60%] text-white flex flex-colrounded-md justify-center items-center p-10 shadow-xl"
      >
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          close
        </button>
        <div className="">{data.content}</div>
      </motion.div>
    </div>
  );
};

export default ModalComponent;
