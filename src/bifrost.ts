import { CardanoWallet } from "./types";

export function getWallets(): Array<CardanoWallet> {
    const result: Array<CardanoWallet> = [];
    const cardanoNamespace = window.cardano;

    if (!cardanoNamespace) return result;

    Object.entries(cardanoNamespace).forEach(([key, wallet]) => {
        if (wallet?.name && wallet?.apiVersion) {
            result.push({...wallet, id: key});
        }
    });

    return result;
}