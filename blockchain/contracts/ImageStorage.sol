pragma solidity ^0.8.0;


import "./Image.sol";



contract ImageStorage {
    Image[] public images;

    function addImage(string memory ipfsId) public {
        Image newImage = new Image();
        newImage.setIpfsId(ipfsId);
        images.push(newImage);
    }

    function getImages() public view returns (Image[] memory) {
        return images;
    }

    function getImage(uint index) public view returns (Image) {
        require(index < images.length, "Image index out of bounds");
        return images[index];
    }
}