import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
