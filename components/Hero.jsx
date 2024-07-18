"use client";

import React from "react";
import Navbar from "./Navbar";
import Popup from "./ui/popup-modal";

const Hero = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Navbar
        containerStyles="hidden xl:flex gap-x-8 items-center"
        linkStyles="relative hover:text-primary transition:all color:red"
        underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
      />
      <h1>Other components</h1>
      <Popup/>
    </div>
  );
};

export default Hero;
