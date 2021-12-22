const lib = require('../lib');


// without grouping
test('absolute - should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
});

test('absolute - should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1); 
});

test('absolute - should return 0 if input 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0); 
});





