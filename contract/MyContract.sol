// SPDX-License-Identifier: MIT

pragma solidity 0.7.0;

contract MyContract{
    //state variables
    string private message;

    //declare event
    event NewMessage(string message);

    //constructor
    constructor(string memory _msg){
        message = _msg;
    }

    //reading function
    function getMsg() external view returns(string memory){
        return message;
    }

    //writing function
    function setMsg(string memory _msg) external {
        //emit event
        message = _msg;
        emit NewMessage(_msg);
    }
}

