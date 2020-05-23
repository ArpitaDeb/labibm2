const assert = require('assert');
const stringCalc = require('./stringCalc');

it('returns the correct sum of two numbers (Requirement # 1a,1c)', () => {
    assert.equal(stringCalc.add("55,42"),97);
});

it('returns the correct sum of three numbers (Requirement # 1a,1c)', () => {
    assert.equal(stringCalc.add("53,123,5"),181);
})

it('returns 0 on an empty string input (Requirement # 1b)', () => {
    assert.equal(stringCalc.add(""),0);
})

it('returns 0 on a null input (Requirement # 1b)', () => {
    assert.equal(stringCalc.add(),0);
});

it('returns the correct sum of numbers separated by a new line (Requirement # 2)', () => {
    assert.equal(stringCalc.add("12,4\n302"),318);
});

it('returns the correct sum when using a custom delimiter (Requirement # 3)', () => {
    assert.equal(stringCalc.add("//!\n1!2!3!4"),10);
});

it('returns the correct sum when using different delimiters, including a custom one', () => {
    assert.equal(stringCalc.add("//~;~\n1,2~;~3\n4"),10);
});

it('throws an error when a negative number is input, and lists the negative number(s) (Requirement #4)', () => {
    function addNeg() {
        stringCalc.add("-55,-42");
    }
    assert.throws(addNeg, Error, `Negatives not allowed. Please replace number(s): -55,-42`);
});

it('ignores numbers larger than 1000 (Bonus #1)', () => {
    assert.equal(stringCalc.add("53,1234,5"),58);
});

it('returns the correct sum when using an arbitrary-length delimiter (Bonus # 2)', () => {
    assert.equal(stringCalc.add("//Hello!\n1Hello!2Hello!3Hello!4"),10);
});