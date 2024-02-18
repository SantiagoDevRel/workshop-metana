//import web3 module, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("../contract/contractABI.json");
const BYTECODE = require("../contract/contractByteCode.json");

//initialize a provider
const web3 = new Web3("https://polygon-mumbai-pokt.nodies.app");

async function deploy() {
  //1. initialize a wallet with funds
  const privateKey = "0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf";
  const wallet = web3.eth.accounts.wallet.add(privateKey);
  const myAddress = wallet[0].address;

  //2. create instance of the contract
  const contract = new web3.eth.Contract(ABI);

  //3. create contract deployer
  const deployer = contract.deploy({
    data: BYTECODE,
    arguments: ["This is the first message"],
  });

  //4. send the deployer in a transaction
  const txReceipt = await deployer.send({ from: myAddress });

  console.log("Contract deployed to:", txReceipt.options.address);
}

deploy();
