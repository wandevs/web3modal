const ConnectToWanMask = async () => {
  let provider = null;
  if (typeof window.wanchain !== 'undefined') {
    provider = window.wanchain;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.wan3) {
    provider = window.wan3.currentProvider;
  } else {
    window.open('https://github.com/wanchain/wanmask/releases');
    throw new Error("No WanMask Provider found");
  }
  return provider;
};

export default ConnectToWanMask;
