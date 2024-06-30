import { useState } from "react";
import Modal from "../../Modal/Modal";
import Image from '../../../../../node_modules/next/image';

export default function RulesButton(){
    const [showRulesUnicorn, setShowRulesUnicorn] = useState<Boolean>(false);

    const toggleShowRulesUnicorn = () => {
        setShowRulesUnicorn((current) => !current);
        
      }
    return(
        <div>

        <button className='bg-[#414A78] p-1 border-2 border-solid border-white text-[#f3f3f3] font-text text-xl rounded-2xl hover:bg-pink-300 shadow-2xl'
                type="button"
                onClick={toggleShowRulesUnicorn}
                >
            HOW TO HUMP
        </button> 
        {showRulesUnicorn && <Modal
            content={<>
                <Image src="/humping_images/How_To_Hump_2.png" width={320} height={100} alt="rules of unicorn app"/>
            </>}
            handleClose={toggleShowRulesUnicorn}
        />}
        </div>
    )
}