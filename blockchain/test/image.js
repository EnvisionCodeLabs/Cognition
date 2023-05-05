const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const Image = artifacts.require('Image');

contract('Image', function (accounts) {
    const [owner, alice, bob] = accounts;

    let image;

    beforeEach(async function () {
        image = await Image.new();
    });

    it('should add an address to the accepted list', async function () {
        await image.addToAccepted(alice, { from: owner });
        const index = await image.isAccepted(alice);
        expect(index).to.be.bignumber.equal(new BN(0));
    });

    it('should add an address to the rejected list', async function () {
        await image.addToRejected(bob, { from: owner });
        const index = await image.isRejected(bob);
        expect(index).to.be.bignumber.equal(new BN(0));
    });

    it('should not add an already accepted address to the accepted list', async function () {
        await image.addToAccepted(alice, { from: owner });
        await expectRevert(
            image.addToAccepted(alice, { from: owner }),
            'Address already accepted'
        );
    });

    it('should not add an already rejected address to the rejected list', async function () {
        await image.addToRejected(bob, { from: owner });
        await expectRevert(
            image.addToRejected(bob, { from: owner }),
            'Address already rejected'
        );
    });

    it('should remove an address from the rejected list when added to the accepted list', async function () {
        await image.addToRejected(bob, { from: owner });
        await image.addToAccepted(bob, { from: owner });
        const indexRejected = await image.isRejected(bob);
        const indexAccepted = await image.isAccepted(bob);
        expect(indexRejected).to.be.bignumber.equal(new BN(-1));
        expect(indexAccepted).to.be.bignumber.equal(new BN(0));
    });

    it('should remove an address from the accepted list when added to the rejected list', async function () {
        await image.addToAccepted(alice, { from: owner });
        await image.addToRejected(alice, { from: owner });
        const indexAccepted = await image.isAccepted(alice);
        const indexRejected = await image.isRejected(alice);
        expect(indexAccepted).to.be.bignumber.equal(new BN(-1));
        expect(indexRejected).to.be.bignumber.equal(new BN(0));
    });
});
