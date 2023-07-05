import { IProviderInfo } from "../../helpers";

// @ts-ignore
import Web3DefaultLogo from "../logos/web3-default.svg";

export const TRON: IProviderInfo = {
  id: "others",
  name: "Tron",
  logo: Web3DefaultLogo,
  type: "others",
  check: "isTron"
};