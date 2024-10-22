"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./smallComponents/Button";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Components" },
  { path: "/contact", name: "Templates" },
  { path: "/contact", name: "Pricing" },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleOnClick = () => {
    setUnderlineWidth(underlineWidth + 1);
  };

  const style = "border-2 border-red";

  return (
    <nav className="flex">
      <div className=" flex justify-center items-center m-6 border-2 border-white rounded-full border-dotted max-w-xl">
        {links.map((link, index) => {
          const isHovered = hoveredIndex === index;
          const isLeft = hoveredIndex === index - 1;
          const isRight = hoveredIndex === index + 1;

          let color = "";
          let scaleClass = "";
          let pad = "6";
          if (isHovered) {
            color = "text-red-400";
            pad = "1";
            scaleClass = "scale-125";
          } else if (isLeft || isRight) {
            color = "text-blue-300";
            scaleClass = "scale-110";
            pad = "3";
          }

          return (
            <Link
              href={link.path}
              key={index}
              className={`capitalize hover:bg-black hover:rounded-full hover:text-white px-5 mx-3 transition-all ${scaleClass} duration-400 ${color} transform py-${pad}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <Button
        label="Browse Components ➤"
        onClick={handleOnClick}
        style="my-5 mx-5 p-3 border-2 border-red rounded-full absolute right-0 transform transition-all duration-500 hover:scale-110 hover:bg-blue-300"
      ></Button>
    </nav>
  );
};

export default Navbar;
