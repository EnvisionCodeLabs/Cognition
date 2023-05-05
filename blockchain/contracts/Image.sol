// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Image {
    
    string public ipfsId;
    address[] public acceptedAddresses;
    address[] public rejectedAddresses;

    function addToAccepted(address newAddress) public {
        require(!isAccepted(newAddress), "Address already accepted");
        acceptedAddresses.push(newAddress);
    }

    function addToRejected(address newAddress) public {
        require(!isRejected(newAddress), "Address already rejected");
        rejectedAddresses.push(newAddress);
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
