// const TronWeb = require('tronweb');
let name = 'TronLink';
let provider = null;
let tronWeb: any = null;
let tronLink: any = null;

const ConnectToTron = async () => {
  console.log('go to connect to tron')
  if (typeof window.tronLink !== 'undefined') {
    console.log('go to connect to tron')
    provider = window.tronLink;
    tronWeb = window.tronWeb;
    tronLink = window.tronLink;
    try {
      await provider.request({ method: 'tron_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else {
    window.open('https://chrome.google.com/webstore/search/tron');
    throw new Error("No TronLink Provider found");
  }

  const getAccounts = async () => {
    if (tronLink) {
      // only authorize, not return accounts, this.tronWeb.trx.getAccount do not support reconnetct after reject
      await tronLink.request({method: 'tron_requestAccounts'});
    }
    if (tronWeb && tronWeb.defaultAddress && tronWeb.defaultAddress.base58) {
      return [tronWeb.defaultAddress.base58];
    } else {
      console.error("%s not installed or locked", name);
      throw new Error("Not installed or locked");
    }
  }

  const getChainId = async () => {
    console.log('tron get chain id');
    return 0;
  }

  const getId = async () => {
    console.log('tron get network id')
    return 0;
  }

  const getBalance = async (addr: string) => {
    let balance = await tronWeb.trx.getBalance(addr);
    return balance;
  }

  provider.getAccounts = getAccounts;
  provider.getChainId = getChainId;
  provider.getId = getId;
  provider.getBalance = getBalance;
  provider.name = name;
  provider.type = 'others';

  return provider;
};

export default ConnectToTron;
