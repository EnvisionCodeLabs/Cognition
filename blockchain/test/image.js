const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const Image = artifacts.require('Image');

contract('Image', function (accounts) {
    const [owner, suyog, ashwot] = accounts;

    let image;

    beforeEach(async function () {
        image = await Image.new('djkdjdkjdkjd');
    });

    it('should add an address to the accepted list', async function () {
        await image.addToAccepted(suyog, { from: owner });
        const index = await image.isAccepted(suyog);
        expect(index).to.be.bignumber.equal(new BN(0));
    });

    it('should add an address to the rejected list', async function () {
        await image.addToRejected(ashwot, { from: owner });
        const index = await image.isRejected(ashwot);
        expect(index).to.be.bignumber.equal(new BN(0));
    });

    it('should not add an already accepted address to the accepted list', async function () {
        await image.addToAccepted(suyog, { from: owner });
        await expectRevert(
            image.addToAccepted(suyog, { from: owner }),
            'Address already accepted'
        );
    });

    it('should not add an already rejected address to the rejected list', async function () {
        await image.addToRejected(ashwot, { from: owner });
        await expectRevert(
            image.addToRejected(ashwot, { from: owner }),
            'Address already rejected'
        );
    });

    it('should remove an address from the rejected list when added to the accepted list', async function () {
        await image.addToRejected(ashwot, { from: owner });
        await image.addToAccepted(ashwot, { from: owner });
        const indexRejected = await image.isRejected(ashwot);
        const indexAccepted = await image.isAccepted(ashwot);
        expect(indexRejected).to.be.bignumber.equal(new BN(-1));
        expect(indexAccepted).to.be.bignumber.equal(new BN(0));
    });

    it('should remove an address from the accepted list when added to the rejected list', async function () {
        await image.addToAccepted(suyog, { from: owner });
        await image.addToRejected(suyog, { from: owner });
        const indexAccepted = await image.isAccepted(suyog);
        const indexRejected = await image.isRejected(suyog);
        expect(indexAccepted).to.be.bignumber.equal(new BN(-1));
        expect(indexRejected).to.be.bignumber.equal(new BN(0));
    });
});
