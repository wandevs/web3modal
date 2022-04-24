const ConnectToXDC = async () => {
  let provider = null;
  if (typeof window.xdc !== 'undefined') {
    provider = window.xdc;
    try {
      await provider.enable();
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No XDC Provider found");
  }
  return provider;
};

export default ConnectToXDC;
