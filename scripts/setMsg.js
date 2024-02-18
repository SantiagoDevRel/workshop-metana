//import web3 and ABI
const { Web3 } = require("web3");
const ABI = require("../contract/contractABI.json");

const web3 = new Web3("https://polygon-mumbai-pokt.nodies.app");

async function setMsg() {
  //1. initialize a wallet with funds
  const privateKey = "0x4d8e1afee7c1d59807d8288868610864b8efd2ac0192cc7536b36a3d5ec6d90c";
  const wallet = web3.eth.accounts.wallet.add(privateKey);
  const myAddress = wallet[0].address;

  //2. initialize a contract
  const contractAddress = "0x4c67e8a3296b743Ea95F6A76Ab12B16B2cAC449a";
  const myContract = new web3.eth.Contract(ABI, contractAddress);

  //3. send transaction
  const message = "This is the fifth message";
  const txReceipt = await myContract.methods.setMsg(message).send({ from: myAddress });

  console.log(txReceipt);
}

setMsg();
