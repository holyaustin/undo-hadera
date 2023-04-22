import React, { useState } from "react";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/banner.jpg";

const coinbaseWalletSdk = coinbaseWalletModule();
const walletConnect = walletConnectModule();
const injected = injectedModule();

const modules = [coinbaseWalletSdk, walletConnect, injected];

const MAINNET_RPC_URL = "https://api.node.glif.io";
const TESTNET_RPC_URL = "https://api.hyperspace.node.glif.io/rpc/v1";

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x314", // chain ID must be in hexadecimel
      token: "MATIC",
      namespace: "evm",
      label: "Filecoin Mainnet",
      rpcUrl: MAINNET_RPC_URL
    },
    {
      id: "0x3141",
      token: "Matic",
      namespace: "evm",
      label: "Filecoin Hyperspace",
      rpcUrl: TESTNET_RPC_URL
    },
  ],
  appMetadata: {
    name: "Undo",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Undo - Save our Planet through community service",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" }
    ]
  }
});

const Welcome = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState();

  const connectWallet2 = async () => {
    try {
      const wallets = await onboard.connectWallet();
      const { accounts, } = wallets[0];
      setAccount(accounts[0].address);
      navigate("/explore");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full mf:flex-row flex-col justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-5xl sm:text-7xl text-white py-1 font-semibold">
            UNDO <br />
            <p className="text-left mt-5 font-light text-2xl text-yellow-400">
            ... saving our Planet through community service
          </p>
          </h1><br />
          <p className="text-left mt-5 text-white font-light text-4xl ">
            Stopping Deforestation, <br /> Promoting Community Support <br />for Sustainability. <br /> Help our Environment <br /> and get rewarded
          </p><br />
          <p className="text-left mt-5 font-light text-2xl text-yellow-400">
            Join this Project, Contribute now! <br /> Let's UNDO the havoc we have done against our planet.
          </p>
          {/**
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-2xl">
            Connect your wallet, submit details of your <br /> enviromental waste, recyclers go to the <br />  marketplaceplace  and recycle  waste close to their location...
          </p><br />
           {!currentAccount && ( )} */}
          <button
            type="button"
            onClick={connectWallet2}
            className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
          >

            <p className="text-black text-3xl font-semibold py-3 px-10 mx-14 hover:text-white hover:text-white">
              Connect Wallet
            </p>
          </button>

          <div className="text-white text-2xl font-semibold mx-4 my-5 ">
            <div>Connected Wallet Address: <br /> {account}</div>
          </div>

        </div>
      </div>
      <div className="sm:flex-[0.9] lg:flex-[0.9]flex-initial justify-left items-center">

        <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default Welcome;
