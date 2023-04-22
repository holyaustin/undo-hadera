import React, { useState, useContext } from "react";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/banner.jpg";
import { GlobalAppContext } from '../contexts/GlobalAppContext';
import { connectToMetamask } from '../services/metamaskService';

const coinbaseWalletSdk = coinbaseWalletModule();
const walletConnect = walletConnectModule();
const injected = injectedModule();

const modules = [coinbaseWalletSdk, walletConnect, injected];

const TESTNET_RPC_URL = "https://testnet.hashio.io/api";

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x128",
      token: "HBAR",
      namespace: "evm",
      label: "Hedera Testnet",
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

    // use the GlobalAppContext to keep track of the metamask account connection
    const { metamaskAccountAddress, setMetamaskAccountAddress } = useContext(GlobalAppContext);

    const retrieveWalletAddress = async () => {
      const addresses = await connectToMetamask();
      if (addresses) {
        // grab the first wallet address
        setMetamaskAccountAddress(addresses[0]);
        console.log(addresses[0]);
      }
    }

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
          <p className="text-left mt-5 text-white font-light text-3xl ">
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
            onClick={retrieveWalletAddress}
            className="flex flex-row justify-center items-center mx-10 my-10 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white text-black text-3xl font-semibold py-5 px-10"
          >
          {metamaskAccountAddress === "" ?
            "Connect to MetaMask" :
            `Connected to: ${metamaskAccountAddress.substring(0, 6)}...${metamaskAccountAddress.substring(metamaskAccountAddress.length - 4)}`}
          </button>
        </div>
      </div>
      <div className="sm:flex-[0.9] lg:flex-[0.9]flex-initial justify-left items-center">

        <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default Welcome;
