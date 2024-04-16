"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);


  return (
    <>
    <div style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="/humping_images/avatar.webp"
          alt="Logo"
          width={width < 1024 ? "50" : "80"}
          height={width < 1024 ? "45" : "65"}
          className="relative"
        />
    </div>
        
    </>
  );
};
export default Logo;
