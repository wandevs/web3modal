import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
const ConnectToMagicWallet = async () => {
  console.log('ConnectToMagic...');
  const magic = new Magic("pk_live_EBE987B2422760F0", {
    network: "ethereum",
    locale: "en_US",
    extensions: [new ConnectExtension()]
  } as any);
  return magic.rpcProvider as any;
};

export default ConnectToMagicWallet;
