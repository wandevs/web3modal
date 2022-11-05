import { IAbstractConnectorOptions } from "../../helpers";

// import { Magic } from "magic-sdk";
// import { ConnectExtension } from "@magic-ext/connect";


export interface IMagicOptions
  extends IAbstractConnectorOptions {
  magicApiKey: string;
  connectExtension: any;
  locale?: string;
}

const ConnectToMagicWallet = async (
  Magic: any,
  opts: IMagicOptions
) => {
  console.log('ConnectToMagic...');
  const magic = new Magic(opts.magicApiKey, {
    network: opts.network,
    locale: opts.locale ? opts.locale : "en_US",
    extensions: [opts.connectExtension],
  } as any);
  return magic.rpcProvider as any;
};

export default ConnectToMagicWallet;
