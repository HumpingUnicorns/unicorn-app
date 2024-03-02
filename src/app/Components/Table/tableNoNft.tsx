'use client'

export default function TableNoNft() {

    return (
        <>
            <div className='border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10'>
                <h2 className={`border-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[#f3f3f3] text-4xl font-text font-bold mt-4 mb-10`}>You don't have NFT in your account</h2>
                <h5>Please buy some NFTs at <a className={``} target="_blank" href={`https://avax.hyperspace.xyz/collection/avax/e54c4435-5693-482d-a153-80baaae7e213`}>https://avax.hyperspace.xyz/collection/avax/e54c4435-5693-482d-a153-80baaae7e213</a></h5>
            </div>
        </>
    )

}