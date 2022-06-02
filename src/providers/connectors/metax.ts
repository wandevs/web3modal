const ConnectToMETAX = async () => {
  console.log('ConnectToMETAX...');
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
    throw new Error("No METAX Provider found");
  }
  return provider;
};

export default ConnectToMETAX;
