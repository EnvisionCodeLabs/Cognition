// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Image {
    string public ipfsId;
    string public fileName;
    
    address[] public acceptedAddresses;
    address[] public rejectedAddresses;

    event Accepted(address indexed voter);
    event Rejected(address indexed voter);

    constructor(string memory _ipfsId, string memory _fileName) {
        ipfsId = _ipfsId;
        fileName = _fileName;
    }

    function addToAccepted(address newAddress) public {
        require(!isAccepted(newAddress), "Already accepted");
        require(!isRejected(newAddress), "Already rejected");
        acceptedAddresses.push(newAddress);
        emit Accepted(newAddress);
    }

    function addToRejected(address newAddress) public {
        require(!isRejected(newAddress), "Already rejected");
        require(!isAccepted(newAddress), "Already accepted");
        rejectedAddresses.push(newAddress);
        emit Rejected(newAddress);
    }

    function removeFromAccepted(address addressToRemove) public {
        for (uint i = 0; i < acceptedAddresses.length; i++) {
            if (acceptedAddresses[i] == addressToRemove) {
                acceptedAddresses[i] = acceptedAddresses[acceptedAddresses.length - 1];
                acceptedAddresses.pop();
                break;
            }
        }
    }

    function removeFromRejected(address addressToRemove) public {
        for (uint i = 0; i < rejectedAddresses.length; i++) {
            if (rejectedAddresses[i] == addressToRemove) {
                rejectedAddresses[i] = rejectedAddresses[rejectedAddresses.length - 1];
                rejectedAddresses.pop();
                break;
            }
        }
    }

    function isAccepted(address queryAddress) public view returns (bool) {
        for (uint i = 0; i < acceptedAddresses.length; i++) {
            if (acceptedAddresses[i] == queryAddress) {
                return true;
            }
        }
        return false;
    }

    function isRejected(address queryAddress) public view returns (bool) {
        for (uint i = 0; i < rejectedAddresses.length; i++) {
            if (rejectedAddresses[i] == queryAddress) {
                return true;
            }
        }
        return false;
    }
}
