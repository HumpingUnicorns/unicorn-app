import React, { useEffect, useState } from 'react';

interface NftComponentProps {
    key: string; // Ou tout autre type approprié pour la clé
    id: string;
    profileNft: string; // Ou tout autre type approprié pour l'image
    nftTokenId: string; // Ou tout autre type approprié pour l'ID du token NFT
    favPosition: any; // Le type de cette propriété dépend de votre application
    handleAddTokenIdToList: (tokenId: Number) => void; // Le type de cette fonction dépend de votre application
    handleRemoveTokenIdToList: (tokenId: Number) => void; // Le type de cette fonction dépend de votre application
    isChange: boolean; // Ou tout autre type approprié pour l'état de changement
}

export default function NftComponent({ id, profileNft, nftTokenId, favPosition, handleAddTokenIdToList, handleRemoveTokenIdToList, isChange }: NftComponentProps){
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        setIsSelected(false);
    }, [isChange]);

    function handleIsSelected(event:any){
        setIsSelected(!isSelected);
        if(!isSelected){
            handleAddTokenIdToList(parseInt(nftTokenId));            
        }else{
            handleRemoveTokenIdToList(parseInt(nftTokenId));
        }
    }

    return(
        <button onClick={event => handleIsSelected(event)} >
  {
  !isSelected ?
  <div className={`w-full h-full relative`}>
    <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white rounded-xl'>
      <div className='w-full h-full flex flex-col justify-start items-center relative'>
        <img alt="nftImg" src={profileNft} className="w-full h-auto"/>
        <hr className='w-full bg-white'></hr>
        <div className="w-full flex justify-center items-center text-white font-bold font-text text-xl mb-0.5">
          Overlay Text
        </div>
        <div className='mt-4 mb-4 w-full'>
          <span className='w-full text-black bg-pink-300 rounded-xl text-center font-body lg:text-sm sm:text-sm md:text-xxs px-2 p-1 shadow-xl shadow-pink-800/50'>{favPosition}</span>
        </div>
      </div>
    </div>
  </div> 
  :
  <div className={`w-full h-full relative opacity-30`}>
    <div className='w-full h-full overflow-hidden bg-[#6e7cc4b1] border-2 border-white rounded-xl'>
      <div className='w-full h-full flex flex-col justify-start items-center relative'>
        <img alt="nftImg" src={profileNft} className="w-full h-auto"/>
        <hr className='w-full bg-white'></hr>
        <div className="w-full flex justify-center items-center text-white font-bold font-text text-xl mb-0.5">
          Overlay Text
        </div>
        <div className='mt-4 mb-4 w-full'>
          <span className='w-full bg-pink-300 text-black rounded-xl text-center font-body md:text-xxs lg:text-xs sm:text-xs p-1 shadow-xl shadow-pink-800/50'>{favPosition}</span>
        </div>
      </div>
    </div>
  </div>
  }
</button>

        
    );
}