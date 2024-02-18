//import web3 and ABI
const { Web3 } = require("web3");
const ABI = require("../contract/contractABI.json");

const web3 = new Web3("https://polygon-mumbai-pokt.nodies.app");

async function getMsg() {
  //1. initialize contract
  const contractAddress = "0x4c67e8a3296b743Ea95F6A76Ab12B16B2cAC449a";
  const myContract = new web3.eth.Contract(ABI, contractAddress);

  //2. call the contract
  const response = await myContract.methods.getMsg().call();

  console.log("Message:", response);
}

getMsg();
