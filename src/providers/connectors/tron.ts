const ConnectToTron = async () => {
  let provider = null;
  if (typeof window.tronLink !== 'undefined') {
    provider = window.tronLink;
    try {
      await provider.request({ method: 'tron_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    window.open('https://chrome.google.com/webstore/search/tron');
    throw new Error("No TronLink Provider found");
  }
  return provider;
};

export default ConnectToTron;
