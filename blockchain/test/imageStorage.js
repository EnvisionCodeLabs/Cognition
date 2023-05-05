const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Image", function () {
  let image;
  let owner;

  beforeEach(async function () {
    const Image = await ethers.getContractFactory("Image");
    image = await Image.deploy();
    await image.deployed();

    [owner] = await ethers.getSigners();
  });

  describe("addToAccepted", function () {
    it("should add new address to accepted", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToAccepted(newAddress);

      const isAccepted = await image.isAccepted(newAddress);
      const isRejected = await image.isRejected(newAddress);

      expect(isAccepted).to.equal(true);
      expect(isRejected).to.equal(false);
    });

    it("should remove address from rejected if it exists", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToRejected(newAddress);

      await image.addToAccepted(newAddress);

      const isAccepted = await image.isAccepted(newAddress);
      const isRejected = await image.isRejected(newAddress);

      expect(isAccepted).to.equal(true);
      expect(isRejected).to.equal(false);
    });

    it("should revert if address is already accepted", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToAccepted(newAddress);

      await expect(image.addToAccepted(newAddress)).to.be.revertedWith(
        "Address already accepted"
      );
    });
  });

  describe("addToRejected", function () {
    it("should add new address to rejected", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToRejected(newAddress);

      const isAccepted = await image.isAccepted(newAddress);
      const isRejected = await image.isRejected(newAddress);

      expect(isAccepted).to.equal(false);
      expect(isRejected).to.equal(true);
    });

    it("should remove address from accepted if it exists", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToAccepted(newAddress);

      await image.addToRejected(newAddress);

      const isAccepted = await image.isAccepted(newAddress);
      const isRejected = await image.isRejected(newAddress);

      expect(isAccepted).to.equal(false);
      expect(isRejected).to.equal(true);
    });

    it("should revert if address is already rejected", async function () {
      const newAddress = ethers.Wallet.createRandom().address;
      await image.addToRejected(newAddress);

      await expect(image.addToRejected(newAddress)).to.be.revertedWith(
        "Address already rejected"
      );
    });
  });

});
