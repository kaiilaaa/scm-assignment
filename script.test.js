const calculateOrderTotal = require('./script');

test('calculates cafe total incorrectly to demonstrate failure', () => {
    // 10 + (10 * 0.10) is 11, but we expect 15 to force a test failure
    expect(calculateOrderTotal(10, 0.10)).toBe(15);
});
