import { useState } from "react";
import Modal from "../../Modal/Modal";
import Image from 'next/image';

export default function TwitterIntent(){
    return(
        <div className='w-full h-auto flex flex-col justify-start items-center'>
        <button 
            className="w-[200px] bg-[#4d619e] p-2 border-2 border-solid border-white text-[#f3f3f3] font-text text-xl rounded-2xl hover:bg-pink-300 shadow-2xl flex flex-col items-center"
            onClick={() => window.open("https://twitter.com/intent/tweet?url=https://house.humpingunicorns.com/&text=I%20just%20sent%20my%20@HumpingUnic0rns%20to%20the%20Hump%20House%21%0A%0AHopefully%20they'll%20have%20a%20Fling%20and%20bring%20home%20a%20friend!", "_blank")}
        >
            <img 
                src="/humping_images/Tweet_About_It.gif"
                className="w-full h-auto mb-2 rounded-2xl"
                alt="Tweet About It"
            />
            TWEET ABOUT IT!
        </button>
    </div>
    )
}