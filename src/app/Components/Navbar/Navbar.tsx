import { CustomButton } from "../Custom/CustomButton.tsx"
import Image from "next/image";
import React from "react";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-10">
            <Logo />
            <div className="flex gap-4">
                    <a href="https://twitter.com/HumpingUnic0rns">
                        <Image src='/twitter_logo.png' alt="twitter_logo"
                            width={50}
                            height={50}
                            style={{ borderRadius: 999 }} className="" 
                        />
                    </a>
                    <a href="discord.gg/eKPsXYsDnE">
                        <Image src='/discord_logo.webp' alt="discord_logo"
                            width={50}
                            height={50}
                            style={{ borderRadius: 999 }} className="" 
                        />
                    </a>
                </div>
            </div>
           
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#414A78"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <div className="justify-center items-center m-2 w-3/4 hidden md:flex">
                
                <div className="ml-auto">
                    {CustomButton()}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;