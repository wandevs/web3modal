import { IAbstractConnectorOptions } from "../../helpers";

export interface WanMaskOptions extends IAbstractConnectorOptions {
  config?: any;
}

const ConnectToWanMask = async (
  WanMaskProvider: any,
  opts: WanMaskOptions
) => {
  let provider = null;
  if (typeof window.wanchain !== 'undefined') {
    provider = window.wanchain;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.wan3) {
    provider = window.web3.currentProvider;
  } else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToWanMask;
