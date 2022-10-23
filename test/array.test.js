const expect = require('chai').expect;

const njarray = require('../src');

describe('Array properties test', () => {
    it('1D array shape test', () => {
        expect(
            JSON.stringify(
                new njarray.array([1]).size()
            )
        ).to.equal(JSON.stringify([1]));
    });
    it('Random array shape test', () => {
        expect(
            JSON.stringify(
                new njarray.array([1]).size()
            )
        ).to.equal(JSON.stringify([1]));
    });
});