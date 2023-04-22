/* eslint-disable no-use-before-define */
/* pages/index.js */
import { ethers } from "ethers";
import { useEffect, useState, useContext  } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Waste from "../utils/UndoForest.json";
import { UndoContractAddress } from "../../config";
import { GlobalAppContextProvider } from '../contexts/GlobalAppContext';
import { AccountId, Client, PrivateKey } from "@hashgraph/sdk";
import { GlobalAppContext } from "../contexts/GlobalAppContext";
import { sendHbar } from '../services/hederaService';


export default function Sender() {
//  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadWaste();
  }, []);

  
// connecting to Hedera and creating a client
const REACT_APP_MY_ACCOUNT_ID='0.0.4290410';
const REACT_APP_MY_PRIVATE_KEY='0x2b1ca838559adc994d631b6c03dbbccc911bf4a6d3bfaddc9336a26f2f1c453f';
const metamaskAccountAddress  = '0xa6D6f4556B022c0C7051d62E071c0ACecE5a1228';
console.log('metamsk address from usecontext is', metamaskAccountAddress);
  // If we weren't able to grab it, we should throw a new error
  if (!REACT_APP_MY_ACCOUNT_ID || !REACT_APP_MY_PRIVATE_KEY) {
    throw new Error("Environment variables REACT_APP_MY_ACCOUNT_ID and REACT_APP_MY_PRIVATE_KEY must be present");
  }

  // create your client
  const myAccountId = AccountId.fromString(REACT_APP_MY_ACCOUNT_ID);
  console.log('myAccount ID is', myAccountId);
  const myPrivateKey = PrivateKey.fromString(REACT_APP_MY_PRIVATE_KEY);
  console.log('myPrivateKey is', myPrivateKey);

  const client = Client.forTestnet();
  client.setOperator(myAccountId, myPrivateKey);




  const getIPFSGatewayURL = (ipfsURL) => {
    const urlArray = ipfsURL.split("/");
    const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
    return ipfsGateWayURL;
  };

  const rpcUrl = "https://api.hyperspace.node.glif.io/rpc/v1";
  // const rpcUrl = "https://testnet.hashio.io/api";

  async function loadWaste() {
    const [account, setAccount] = useState();
    
    const wallets = await onboard.connectWallet();
    const { accounts, } = wallets[0];
    setAccount(accounts[0].address);

    /* create a generic provider and query for Wastes */
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(UndoContractAddress, Waste.abi, provider);
    const data = await contract.fetchMarketItems();
    console.log("Waste data fetched from contract", data);
    /*
    *  map over items returned from smart contract and format
    *  them as well as fetch their token metadata
    */
    // eslint-disable-next-line arrow-parens
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId);
      console.log("token Uri is ", tokenUri);
      const httpUri = getIPFSGatewayURL(tokenUri);
      console.log("Http Uri is ", httpUri);
      const meta = await axios.get(httpUri);
      const price = ethers.utils.formatUnits(i.price.toString(), "ether");

      const item = {
        price,
        tokenId: i.tokenId.toNumber(),
        image: getIPFSGatewayURL(meta.data.image),
        name: meta.data.name,
        description: meta.data.description,
        country: meta.data.properties.country,
        collectionPoint: meta.data.properties.collectionPoint,
        weight: meta.data.properties.weight,
      };
      console.log("item returned is ", item);
      return item;
    }));
    setNfts(items);
    setLoadingState("loaded");
  }
  async function recycle(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    console.log("item id clicked is", nft.tokenId);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(UndoContractAddress, Waste.abi, signer);

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, { value: price });
    await transaction.wait();
    console.log("waste transaction completed, waste should show in UI ");
    const token = nft.tokenId;
    console.log("token id is ", token);
    loadWaste();
    // navigate("/view", { state: token });
  }
  if (loadingState === "loaded" && !nfts.length) {
    return (
      <div>
        <h1 className="px-20 py-10 text-3xl text-white">No Entries yet</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-center bg-gray-500 mb-12">
            <GlobalAppContextProvider>
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (

            <div key={i} className="shadow rounded-xl overflow-hidden border-2 border-white-500">
              <img
                title="Waste"
                frameBorder="0"
                scrolling="no"
                height="400px"
                width="100%"
                src={`${nft.image}#toolbar=0`}
                className="py-3 object-fill h-500"
              />
              <div className="p-1">
                <p style={{ height: "34px" }} className="text-xl text-green-300 font-semibold">Category: {nft.name}</p>
                <div style={{ height: "80px", overflow: "hidden" }}>
                  <p className="text-gray-200">Description: {nft.description}</p>
                </div>
                <p style={{ height: "34px" }} className="text-xl font-semibold">Country : {nft.country}</p>
                <div style={{ height: "40px", overflow: "hidden" }}>
                  <p className="text-gray-700">Location: {nft.collectionPoint}</p>
                </div>
                <p className="text-xl font-bold text-white"> Impact: {nft.weight}</p>
                <p className="text-xl font-bold text-black">Donate : {nft.price} HBAR</p>
              </div>

              <div className="p-2 bg-black">
                <button type="button" className="mt-4 w-full bg-green-500 text-white font-bold py-2 px-12 rounded" 
                        onClick={() => {
                          sendHbar(client, myAccountId, AccountId.fromEvmAddress(0, 0, metamaskAccountAddress), 1, myPrivateKey)
                        }}>
                  Contribute
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </GlobalAppContextProvider>
    </div>
  );
}
