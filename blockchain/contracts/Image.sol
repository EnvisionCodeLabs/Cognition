// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Image {
    string public ipfsId;
    address[] public addressAccepted;
    address[] public addressRejected;

    function addToAccepted(address newAddress) public {
        require(isAccepted(newAddress) != -1, "Address already accepted");

        int rej = isRejected(newAddress);

        if (rej != -1){
            delete addressRejected[uint(rej)];
        }

        addressAccepted.push(newAddress);

    }

    function addToRejected(address newAddress) public {
        require(isRejected(newAddress) != -1, "Address already rejected");

        int apt = isAccepted(newAddress);

        if (apt != -1){
            delete addressAccepted[uint(apt)];
        }
        addressRejected.push(newAddress);
    }

    function isAccepted(address queryAddress) public view returns (int) {
        for (uint i = 0; i < addressAccepted.length; i++) {
            if (addressAccepted[i] == queryAddress) {
                return int(i);
            }
        }
        return -1;
    }

    function isRejected(address queryAddress) public view returns (int) {
        for (uint i = 0; i < addressRejected.length; i++) {
            if (addressRejected[i] == queryAddress) {
                return int(i);
            }
        }
        return -1;
    }


}
