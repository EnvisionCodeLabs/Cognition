// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AllInOneImage{

    struct Image {
        string ipfsId;
        string fileName;
        address owner;
        bool confirmed;

        uint yesCount;
        uint noCount;
    }

    event ImageCreated (
        string ipfsId,
        string fileName
    );

    event VoteStarted(
        string ipfsId,
        string fileName
    );

    mapping(uint => Image) public images;

    uint public currentCount;

    constructor(){
        currentCount = 0;
    }

    function addImage(string memory _ipfs, string memory fileName, bool confirmed) public payable {

        images[currentCount] = Image(_ipfs, fileName, msg.sender, confirmed, 0, 0);

        if (confirmed){
            emit ImageCreated(_ipfs, fileName);
        }else {
            emit VoteStarted(_ipfs, fileName);
        }

        currentCount++;

    }



}
