const Image = artifacts.require("Image");
const ImageStorage = artifacts.require("ImageStorage");

module.exports = function (deployer) {
  deployer.deploy(Image, "hsjhsjhsjhjsh", "djdhdjhdjdhjdhj").then(function() {
    return deployer.deploy(ImageStorage);
  });
};
