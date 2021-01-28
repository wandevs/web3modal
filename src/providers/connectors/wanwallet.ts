const ConnectToWanWallet = async (
  wanwallet: any
) => {
  let provider = null;
  if (typeof window.injectWeb3 !== 'undefined') {
    await wanwallet.activate();
    provider = await wanwallet.getProvider();
  } else {
    throw new Error("No Wan Wallet Provider found");
  }
  return provider;
};

export default ConnectToWanWallet;
