import "./App.css";
import { useState } from "react";
import { Web3 } from "web3";
import ABI from "./ABI.json";

const contractAddress = "0x4c67e8a3296b743Ea95F6A76Ab12B16B2cAC449a";
let web3 = "";

function App() {
  const [connectedAddress, setConnectedAddress] = useState("0x");
  const [lastMessage, setLastMessage] = useState("none");

  async function connectMetamask() {
    //initialize provider
    web3 = new Web3(window.ethereum);

    //request accounts to connect
    const accounts = await web3.eth.requestAccounts();

    //update state with connected account
    setConnectedAddress(accounts[0]);
  }

  async function setMessage(event) {
    //avoid refreshing the page
    event.preventDefault();

    //initialize contract
    const myContract = new web3.eth.Contract(ABI, contractAddress);

    //get the value from the input field
    const message = event.target.elements.message.value;

    //send transaction
    const transaction = await myContract.methods.setMsg(message).send({ from: connectedAddress });

    console.log("Transaction hash:", transaction.transactionHash);
  }

  async function getMessage() {
    //initialize contract
    const myContract = new web3.eth.Contract(ABI, contractAddress);

    //make call
    const response = await myContract.methods.getMsg().call();

    //update state
    setLastMessage(response);
  }

  return (
    <div className="App-header">
      {/* Connect metamask button */}
      <button onClick={connectMetamask}>Connect Metamask</button>

      {/* Show connected address */}
      <p>Connected wallet: {connectedAddress}</p>

      {/* Form to send the message */}
      <form onSubmit={setMessage}>
        <input type="text" name="message"></input>

        <button type="submit">Set Message</button>
      </form>

      {/* Button to update the last message */}
      <button onClick={getMessage}>Get Message</button>

      {/* Show the last message */}
      <p>Last message: {lastMessage}</p>
    </div>
  );
}

export default App;
