'use server'

export async function getAllNfts(userAddress: string) {

    // Make a request to the JoePegs API to get all the NFTs for the user
    const CONTRACT_ADDRESS = "0x34b4da1a0b06cfb09cb0efb46f02e667330e17db";
    const MOCK_USER_ADDRESS = "0xb12B502492073edeb2adddDb1Eb8c67de54Ead46";

    const result = await fetch(`https://api.joepegs.dev/v3/users/${MOCK_USER_ADDRESS}/items?collectionAddresses=${CONTRACT_ADDRESS}`,
        {
            headers: {
                'x-joepegs-api-key': 'ePy3wz7ourtEBZCvUlcDm6tElL64IXTqoXYN'
            }
        });

    // If the request fails, throw an error
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }

    return await result.json();

}