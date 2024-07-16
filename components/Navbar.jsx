"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="flex items-center justify-center m-6 border-2 border-white rounded-full border-dotted max-w-lg">
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
      {/* <button
        className={`border bg-gray-800 p-2 rounded-md transform transition-all duration-500 hover:scale-125 hover:bg-blue-600 ${
          hoveredIndex === links.length ? "scale-150" : ""
        }`}
        onMouseEnter={() => handleMouseEnter(links.length)}
        onMouseLeave={handleMouseLeave}
      >
        Browse components ➤
      </button> */}
    </nav>
  );
};

export default Navbar;
