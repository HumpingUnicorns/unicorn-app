import { useState } from "react";
import Modal from "../../Modal/Modal";
import Image from 'next/image';

export default function TwitterIntent(){
    return(
        <div>

        <a href="https://twitter.com/intent/tweet?url=https://unicorn-app-ten.vercel.app/&text=I%20just%20sent%20my%20Unicorns%20to%20the%20Hump%20House%21%0A%0AThey%20have%20a%20chance%20to%20bring%20home%20a%20swinging%20unicorn%20based%20on%20their%20favorite%20humping%20position.">
            TWEET ABOUT IT!
        </a> 
        </div>
    )
}