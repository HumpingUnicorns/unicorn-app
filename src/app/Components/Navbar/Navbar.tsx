import { CustomButton } from "../Custom/CustomButton.tsx"
import Image from "next/image";

export default function Navbar() {

    return(
        <div className="w-full flex justify-center">
            <div className="flex justify-center items-center m-2 w-3/4">
                <div className="flex gap-4">
                    <p className={`text-[#414A78] text-3xl font-text font-bold`}>Unicorn HUMPING</p>
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
                <div className="ml-auto">
                    {CustomButton()}
                </div>
            </div>
        </div>
        
    )
}