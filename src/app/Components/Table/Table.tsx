import React, { useState } from 'react';
import Image from "next/image";

export default function Table() {
    const [isHumpingSelected, setIsHumpingSelected] = useState(true);

    function handleIsHumpingSelected(){
        setIsHumpingSelected(true);
    }

    function handleIsNotHumpingSelected(){
        setIsHumpingSelected(false);
    }

    return(
        <div className="w-full h-full">
            <div className="h-screen" style={{ backgroundImage: "url('/Mansion.webp')", backgroundSize: "100% 100%"}}>
                <div className='h-5/6 flex justify-center items-center'>
                    {isHumpingSelected ?
                    <div>
                        <div className='flex'>
                            <img src='/Humping_selected.webp' onClick={handleIsNotHumpingSelected} className="rounded-t-3xl text-3xl w-full border-t-2 border-l-2 border-[#414A78]" />
                            <img src='/No_Humping_selected.jpeg' onClick={handleIsHumpingSelected} className="rounded-t-3xl text-3xl w-full border-r-2 border-l-2 border-t-2 border-[#414A78]" />
                        </div>
                        <div className=''>
                        <table className="w-full border-2 border-[#414A78]">
                            <tbody className='border-black border-2 h-96'>
                                <tr className='w-full border-2 border-[#414A78]'>
                                    <td className='border-2 w-1/3 border-[#414A78] text-center'>Melissa</td>
                                    <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                                    <td className='border-2 border-[#414A78] text-center'>6000</td>
                                </tr>
                                <tr className='border-2 border-[#414A78]'>
                                    <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                                    <td className='border-2 border-[#414A78] text-center'>6000</td>
                                    <td className='border-2 border-[#414A78] text-center'>6000</td>
                                </tr>
                                <tr className='border-2 border-[#414A78]'>
                                    <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                                    <td className='border-2 border-[#414A78] text-center'>6000</td>
                                </tr>  
                            </tbody>
                        </table>
                        </div>
                        
                    </div>
                    
                    :
                    <table className="">
                    <thead className='w-full'>
                        <tr className='w-full rounded-3xl'>
                            <th className="rounded-3x">
                                <img src='/Humping_selected.webp' onClick={handleIsNotHumpingSelected} className="rounded-t-3xl text-3xl w-full border-t-2 border-l-2 border-[#414A78]" />
                            </th>
                            <th className='rounded-3xl'>
                                <img src='/No_Humping_selected.jpeg' onClick={handleIsHumpingSelected} className="rounded-t-3xl text-3xl w-full border-r-2 border-l-2 border-[#414A78]" />
                            </th>
                        </tr>
                    </thead>
                    <tbody className='w-full border-black border-2 h-96'>
                        <tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-[#414A78] text-center'>6000</td>
                        </tr>
                        <tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-pink-[#414A78] text-center'>6000</td>
                        </tr>
                        <tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-pink-[#414A78] text-center'>6000</td>
                        </tr><tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-pink-[#414A78] text-center'>6000</td>
                        </tr><tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-pink-[#414A78] text-center'>6000</td>
                        </tr><tr className='border-2 border-[#414A78]'>
                        <td className='border-2 border-[#414A78] text-center'>Melissa</td>
                            <td className='border-2 border-pink-[#414A78] text-center'>6000</td>
                        </tr>
                    </tbody>
                </table>

                }
                </div>
            </div>
        </div>
        
    )
}