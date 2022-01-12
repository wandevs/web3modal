const ConnectToClover = async () => {
  let provider = null;
  if (typeof window.clover !== 'undefined') {
    provider = window.clover;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No Clover Provider found");
  }
  return provider;
};

export default ConnectToClover;
