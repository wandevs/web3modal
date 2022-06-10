const ConnectToXDC = async () => {
  console.log('ConnectToXDC...');
  let provider = null;
  provider = window.xdc;
  if (typeof window.xdc !== 'undefined') {
    provider = window.xdc;
    try {
      await provider.enable();
    } catch (error) {
      window.open('https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo');
      throw new Error("User Rejected");
    }
  } else {
    throw new Error("No XDC Provider found");
  }
  return provider;
};

export default ConnectToXDC;
