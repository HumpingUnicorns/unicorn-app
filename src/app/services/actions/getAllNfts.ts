'use server'


export async function getAllNftDataFromContract(nftIdFromContract: any) {
    if(nftIdFromContract){
        const result = []; 
    for(let i = 0; i < nftIdFromContract.length; i++) {
        try {
            const response = await fetch(`https://api.joepegs.dev/v3/collections/avalanche/${process.env.NEXT_PUBLIC_HUMPING_CONTRACT_MAIN}/tokens/${nftIdFromContract[i]}`,
        {
            headers: {
                'x-joepegs-api-key': `${process.env.API_KEY_MAIN}`
            }
        });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json(); // Récupération des données JSON
            result.push(data); // Ajout des données dans le tableau result
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rejeter l'erreur pour la gérer à un niveau supérieur si nécessaire
        }
    }

    return result; // Renvoie le tableau de données récupérées
    }
}
