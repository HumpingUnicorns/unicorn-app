import Image from "next/image";
import { CustomButton } from "../Custom/CustomButton"

const Sidebar = ({
        isOpen,
        toggle,
    }: {
        isOpen: boolean;
        toggle: () => void;
    }): JSX.Element => {
  return (
    <>
      <div
        className="fixed w-full h-full overflow-hidden bg-[#808080] grid pt-[60px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`
        }}
      >
         <div style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}>
                <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src="/background/Hump_House_Background.mp4" type="video/mp4" />
                </video>

            </div>
        
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <div className="flex justify-center w-full">
        
            <div className=" justify-center items-start m-2 ">
            <div className="flex flex-col gap-16 justify-center items-center">
            <Image  width={200}
                    height={120}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}
                    src="/humping_images/Hump_House.png"
                    alt="title"
                />                </div>
                <div className="flex justify-center gap-4">
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
                <div className="ml-auto flex justify-center">
                    {CustomButton()}
                </div>
            </div>
                
            </div>
      </div>
    </>
  );
};

export default Sidebar;