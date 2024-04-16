'use server'

export async function getAllNfts(userAddress: string) {

    // Make a request to the JoePegs API to get all the NFTs for the user
    const timestamp = new Date().getTime();
    const result = await fetch(`https://api.joepegs.dev/v3/users/${userAddress}/items?collectionAddresses=${process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN}&timestamp=${timestamp}`,
        {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'x-joepegs-api-key': `${process.env.API_KEY_MAIN}`
            }
        });
    // If the request fails, throw an error
    if (!result.ok) {
        throw new Error('Failed to fetch data')
    }

    return await result.json();

}