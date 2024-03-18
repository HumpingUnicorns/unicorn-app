'use server'

export async function getAllNftDataFromContract() {

    // Make a request to the JoePegs API to get all the NFTs for the user
    const CONTRACT_ADDRESS = "0x34b4da1a0b06cfb09cb0efb46f02e667330e17db";
    //TEMP FOR FUJI TEST
    const MOCK_CONTRACT_ADDRESS = "0xc2fE3CaB66d9A798FE668Cf00c9354dA7b7EaD7A";
    //FUJI endpoint : https://api-fuji.joepegs.dev/v3/users/ / API KEY : d6oc3ffHFp9rxIGiPFH8Q54jb58XwC4X6xZX
    //Mainnet endpoint : https://api.joepegs.dev/v3/users/ / API KEY : ePy3wz7ourtEBZCvUlcDm6tElL64IXTqoXYN

    const result = await fetch(`https://api-fuji.joepegs.dev/v3/collections?chain=avalanche&address=${MOCK_CONTRACT_ADDRESS}`,
    {
        headers: {
            'x-joepegs-api-key': 'd6oc3ffHFp9rxIGiPFH8Q54jb58XwC4X6xZX'
        }
    });
    // If the request fails, throw an error
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }

        return await result.json();

}