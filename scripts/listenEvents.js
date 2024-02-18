//import web3 and ABI
const { Web3 } = require("web3");
const ABI = require("../contract/contractABI.json");

const web3 = new Web3("wss://polygon-mumbai-bor.publicnode.com");

async function listenEvents() {
  //1. initialize a contract
  const contractAddress = "0x4c67e8a3296b743Ea95F6A76Ab12B16B2cAC449a";
  const myContract = new web3.eth.Contract(ABI, contractAddress);

  //2. subscribe and listen to the events
  console.log("Listening...");
  const subscription = myContract.events.NewMessage();
  subscription.on("data", console.log);
}

listenEvents();
