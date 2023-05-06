// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "./Image.sol";


contract ImageStorage {
    Image[] public images;

    event ImageAdded(string ipfsId);

    function addImage(string memory ipfsId, string memory fileName) public payable {
        Image newImage = new Image(ipfsId, fileName);
        images.push(newImage);
        emit ImageAdded(ipfsId);
    }

    function getImages() public view returns (Image[] memory) {
        return images;
    }

    function getImage(uint index) public view returns (Image) {
        require(index < images.length, "Image index out of bounds");
        return images[index];
    }
}