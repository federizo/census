import React from "react";

const ModalComponent = ({ setOpenModal, data }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg relative"
        onMouseLeave={() => setOpenModal(false)}
      >
        <h2 className="text-2xl font-semibold mb-4">{data.title1}</h2>
        <h3 className="text-xl font-medium mb-2">{data.title2}</h3>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </div>
  );
};

export default ModalComponent;
