//import web3 and ABI
const { Web3 } = require("web3");
const ABI = require("../contract/contractABI.json");

const web3 = new Web3("wss://polygon-mumbai-bor.publicnode.com");

async function setMsg() {
  //initialize a wallet with funds
  const privateKey = "0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf";
  const wallet = web3.eth.accounts.wallet.add(privateKey);
  const myAddress = wallet[0].address;

  //initialize a contract
  const contractAddress = "0x4c67e8a3296b743Ea95F6A76Ab12B16B2cAC449a";
  const myContract = new web3.eth.Contract(ABI, contractAddress);

  //send transaction
  console.log("Listening...");
  const subscription = myContract.events.NewMessage();
  subscription.on("data", console.log);
}

setMsg();
