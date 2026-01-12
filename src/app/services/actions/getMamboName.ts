import { MAMBOPROFILE } from 'mambo-profiles';
import { createPublicClient, http } from 'viem';
import { avalanche } from 'viem/chains';

const publicClient = createPublicClient({
  chain: avalanche,
  transport: http()
});

const mamboProfileInstance = new MAMBOPROFILE(publicClient as any);

export async function getMamboNameApi(winnerAddress: string) {
    const profile = await mamboProfileInstance.getProfile(winnerAddress as `0x${string}`);
    if (profile) {
        return profile.mamboName || profile.avvyName || winnerAddress;
    }
    return winnerAddress;
}
