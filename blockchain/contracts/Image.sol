// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Image {
    string public ipfsId;
    address[] public acceptedAddresses;
    address[] public rejectedAddresses;

    constructor(string memory _ipfsId) {
        ipfsId = _ipfsId;
    }

    function addToAccepted(address newAddress) public {
        require(!isAccepted(newAddress), "You have already voted");

        
        if (isRejected(newAddress)) {
            removeFromRejected(newAddress);
        }

        acceptedAddresses.push(newAddress);
    }

    function addToRejected(address newAddress) public {
        require(!isRejected(newAddress), "Address already rejected");
      
        if (isAccepted(newAddress)) {
            removeFromAccepted(newAddress);
        }

        rejectedAddresses.push(newAddress);
    }

    function removeFromAccepted(address addressToRemove) public {
        for (uint i = 0; i < acceptedAddresses.length; i++) {
            if (acceptedAddresses[i] == addressToRemove) {
                acceptedAddresses[i] = acceptedAddresses[acceptedAddresses.length - 1];
                acceptedAddresses.pop();
                return;
            }
        }
    }

    function removeFromRejected(address addressToRemove) public {
        for (uint i = 0; i < rejectedAddresses.length; i++) {
            if (rejectedAddresses[i] == addressToRemove) {
                rejectedAddresses[i] = rejectedAddresses[rejectedAddresses.length - 1];
                rejectedAddresses.pop();
                return;
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
