import { IAbstractConnectorOptions } from "../../helpers";

export interface IWalletConnectConnectorOptions
  extends IAbstractConnectorOptions {
  projectId: string;
  chains: number[];
  optionalChains?: number[];
  showQrModal?: boolean;
  rpcMap?: { [chainId: number]: string };
}

const ConnectToWalletConnect = (
  EthereumProvider: any,
  opts: IWalletConnectConnectorOptions
) => {
  console.log('ConnectToWalletConnect', EthereumProvider, opts);
  return new Promise(async (resolve, reject) => {
    try {
      const provider = await EthereumProvider.init({
        projectId: opts.projectId, // REQUIRED your projectId
        chains: opts.chains, // REQUIRED chain ids
        showQrModal: opts.showQrModal ? opts.showQrModal : true, // REQUIRED set to "true" to use @walletconnect/modal
        optionalChains: opts.optionalChains, // OPTIONAL optional chain ids
        // methods, // OPTIONAL ethereum methods
        // events, // OPTIONAL ethereum events
        // rpcMap, // OPTIONAL rpc urls for each chain
        // metadata, // OPTIONAL metadata of your app
        // qrModalOptions // OPTIONAL - `undefined` by default, see https://docs.walletconnect.com/2.0/web3modal/options
      })

      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToWalletConnect;
