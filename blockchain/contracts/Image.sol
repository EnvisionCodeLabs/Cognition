// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Image {
    string public ipfsId;
    address[] public acceptedAddresses;
    address[] public rejectedAddresses;

    function addToAccepted(address newAddress) public {
        require(!isAccepted(newAddress), "You have already voted");

        // If the address is in the rejectedAddresses array, remove it from there
        if (isRejected(newAddress)) {
            removeFromRejected(newAddress);
        }

        acceptedAddresses.push(newAddress);
    }

    function addToRejected(address newAddress) public {
        require(!isRejected(newAddress), "Address already rejected");

        // If the address is in the acceptedAddresses array, remove it from there
        if (isAccepted(newAddress)) {
            removeFromAccepted(newAddress);
        }

        rejectedAddresses.push(newAddress);
    }

    function removeFromAccepted(address addressToRemove) public {
        for (uint i = 0; i < acceptedAddresses.length; i++) {
            if (acceptedAddresses[i] == addressToRemove) {
                // If the address is found, remove it from the array by swapping it with the last element
                acceptedAddresses[i] = acceptedAddresses[acceptedAddresses.length - 1];
                acceptedAddresses.pop();
                return;
            }
        }
    }

    function removeFromRejected(address addressToRemove) public {
        for (uint i = 0; i < rejectedAddresses.length; i++) {
            if (rejectedAddresses[i] == addressToRemove) {
                // If the address is found, remove it from the array by swapping it with the last element
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
