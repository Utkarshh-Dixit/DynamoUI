"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./smallComponents/Button";

const links = [
  { path: "/", name: "🏠︎" },
  { path: "/about", name: "★" },
  { path: "/contact", name: "฿" },
  { path: "/contact", name: "❆" },
  { path: "/contact", name: "♡" },
  { path: "/contact", name: "♫" },
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
          let textSize = "text-3xl";
          let pad = "6";
          if (isHovered) {
            color = "text-pink-400";
            pad = "1";
            textSize = "text-6xl";
          } else if (isLeft || isRight) {
            color = "text-pink-300";
            textSize = "text-4xl";
            pad = "3";
          }

          return (
            <Link
              href={link.path}
              key={index}
              className={`capitalize px-5 transition-all ${textSize} duration-400 ${color} transform py-${pad}`}
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
        style="my-5 p-3 border-2 border-red rounded-full absolute right-0 transform transition-all duration-500 hover:scale-110 hover:bg-blue-300"
      ></Button>
    </nav>
  );
};

export default Navbar;
