pragma solidity ^0.8.0;

contract MediaStake {
    struct Media {
        address uploader;
        string mediaHash;
        uint256 stake;
    }

    mapping (string => Media) private media;

    function uploadMedia(string memory _mediaHash) public payable {
        require(msg.value > 0, "Invalid stake amount");
        media[_mediaHash] = Media(msg.sender, _mediaHash, msg.value);
    }

    function claimCopyright(string memory _mediaHash) public payable {
        require(media[_mediaHash].uploader != address(0), "Media does not exist");
        require(msg.value > 0, "Invalid stake amount");
        if (media[_mediaHash].stake > msg.value) {
            payable(msg.sender).transfer(msg.value);
        } else if (media[_mediaHash].stake < msg.value) {
            payable(media[_mediaHash].uploader).transfer(media[_mediaHash].stake);
            media[_mediaHash] = Media(msg.sender, _mediaHash, msg.value);
        } else {
            payable(msg.sender).transfer(msg.value);
            payable(media[_mediaHash].uploader).transfer(media[_mediaHash].stake);
            media[_mediaHash] = Media(address(0), "", 0);
        }
    }
}
