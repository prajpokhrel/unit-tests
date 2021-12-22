const lib = require('../lib');

// grouping tests
describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1); 
    });
    
    it('should return 0 if input 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0); 
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Prajwal');
        expect(result).toMatch(/Prajwal/);
        expect(result).toContain('Prajwal');
    });
});

// without grouping
// test('absolute - should return a positive number if input is positive', () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
// });

// test('absolute - should return a positive number if input is negative', () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1); 
// });

// test('absolute - should return 0 if input 0', () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0); 
// });





