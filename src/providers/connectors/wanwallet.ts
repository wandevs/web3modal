const ConnectToWanWallet = async (
  wanwallet: any
) => {
  let provider = null;
  if (typeof window.injectWeb3 !== 'undefined' || window.injectWeb3) {
    await wanwallet.activate();
    provider = await wanwallet.getProvider();
  } else {
    window.open('https://www.wanchain.org/wanwallet');
    throw new Error("No Wan Wallet Provider found");
  }
  return provider;
};

export default ConnectToWanWallet;
