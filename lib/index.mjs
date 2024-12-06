// src/bifrost.ts
function getWallets() {
  const result = [];
  const cardanoNamespace = window.cardano;
  if (!cardanoNamespace) return result;
  Object.entries(cardanoNamespace).forEach(([key, wallet]) => {
    if (wallet?.name && wallet?.apiVersion) {
      result.push({ ...wallet, id: key });
    }
  });
  return result;
}
export {
  getWallets
};
//# sourceMappingURL=index.mjs.map