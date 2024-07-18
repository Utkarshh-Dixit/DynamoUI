import React from "react";

const Card = ({ title, para, styling }) => {
  return (
    <div
      className={`flex flex-col ${styling} hover:cursor-pointer max-w-48 min-w-48 items-center justify-center gap-y-4 p-4 mx-4 my-4 bg-white shadow-lg rounded-lg`}
    >
      <h1 className=" text-gray-700">{title}</h1>
      <p className="text-gray-500">{para}</p>
    </div>
  );
};

export default Card;
