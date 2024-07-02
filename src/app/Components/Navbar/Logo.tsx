"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <a href="http://humpingunicorns.com">
        <Image
          src="/humping_images/avatar.webp"
          alt="Logo"
          width={width < 1024 ? "25" : "40"}
          height={width < 1024 ? "22" : "33"}
          className="relative"
        />
        </a>
    </div>
        
    </>
  );
};
export default Logo;
