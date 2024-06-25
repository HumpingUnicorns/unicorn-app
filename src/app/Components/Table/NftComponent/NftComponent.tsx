import React, { useEffect, useState } from 'react';

interface NftComponentProps {
    key: string; // Ou tout autre type approprié pour la clé
    id: string;
    profileNft: string; // Ou tout autre type approprié pour l'image
    nftTokenId: string; // Ou tout autre type approprié pour l'ID du token NFT
    name: string // French french it's the name
    favPosition: any; // Le type de cette propriété dépend de votre application
    handleAddTokenIdToList: (tokenId: Number) => void; // Le type de cette fonction dépend de votre application
    handleRemoveTokenIdToList: (tokenId: Number) => void; // Le type de cette fonction dépend de votre application
    isChange: boolean; // Ou tout autre type approprié pour l'état de changement
}

export default function NftComponent({ id, profileNft, nftTokenId, name, favPosition, handleAddTokenIdToList, handleRemoveTokenIdToList, isChange }: NftComponentProps){
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
        <div className="w-full mt-1 mb-1 flex justify-center items-center text-white font-bold font-text lg:text-base sm:text-sm md:text-xxs">
          {name}
        </div>
        <div className='mt-1 mb-4'>
          <span className='w-full text-pink-200 text-center font-body lg:text-sm sm:text-sm md:text-xxs px-2 p-'style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white', display: 'block', padding: '8px 0' }}>{favPosition}</span>
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
        <div className="w-full mt-1 mb-1 flex justify-center items-center text-white font-bold font-text lg:text-base sm:text-sm md:text-xxs">
          {name}
        </div>
        <div className='mt-1 mb-4'>
        <span className='w-full text-pink-200 text-center font-body lg:text-sm sm:text-sm md:text-xxs px-2 p-'style={{ borderTop: '0.5px solid white', borderBottom: '0.5px solid white', display: 'block', padding: '8px 0' }}>{favPosition}</span>
        </div>
      </div>
    </div>
  </div>
  }
</button>

        
    );
}