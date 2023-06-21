const ConnectToMETAX = async () => {
  console.log('ConnectToOKX...');
  let provider = null;
  provider = window.okexchain;
  if (typeof window.okexchain !== 'undefined') {
    provider = window.okexchain;
    try {
      await provider.enable();
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    window.open('https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge');
    throw new Error("No OKX Provider found");
  }
  return provider;
};

export default ConnectToMETAX;
