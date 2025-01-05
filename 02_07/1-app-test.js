const myTest = require('node:test');
const assert = require('node:assert');
const myOperations = require('../02_06/1-operations');

myTest.test('Testing operations', (t) => {
    const operations = new myOperations.operations();
    const a = 2;
    const b = 3;

    t.test('test addition', (t) => {
        const expected = 5;
        const result = operations.add(2, b);
        assert.equal(result, expected);
    });

    t.test('test multiplication', (t) => {
        const expected = 6;
        const result = operations.multiply(a, b);
        assert.equal(result, expected);
    });
});