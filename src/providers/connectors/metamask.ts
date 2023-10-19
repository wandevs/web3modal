const ConnectToMetaMask = async () => {
  console.log('ConnectToMetaMask...');
  let provider = null;
  provider = window.ethereum;
  if (typeof window.ethereum !== 'undefined') {
    provider = window.ethereum;
    try {
      await provider.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    window.open('https://metamask.io');
    throw new Error("No MetaMask Provider found");
  }
  return provider;
};

export default ConnectToMetaMask;
