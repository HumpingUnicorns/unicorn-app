'use server'

export async function getNftFlingDataFromContractApi(nftIdFromContract: string) {
    if(nftIdFromContract){
        try {
            const response = await fetch(`https://api.joepegs.dev/v3/collections/avalanche/${process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN}/tokens/${nftIdFromContract}`,
        {
            headers: {
                'x-joepegs-api-key': `${process.env.API_KEY_MAIN}`
            }});

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json(); // Récupération des données JSON
            return data; // Renvoie le tableau de données récupérées
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rejeter l'erreur pour la gérer à un niveau supérieur si nécessaire
        }
    }

}