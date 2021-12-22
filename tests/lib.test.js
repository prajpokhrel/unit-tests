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


describe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        
        // Proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(['USD', 'EUR', 'AUD']));

        // Too General
        // expect(result).toBeDefined();
        // expect(result).not.toBeNull();

        // Too Specific
        // expect(result[0]).toBe('USD');
        // expect(result[1]).toBe('AUD');
        // expect(result[2]).toBe('EUR');
        // expect(result.length).toBe(3);
    });
});

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // Too specific
        // expect(result).toEqual({id: 1, price: 10});
        expect(result).toMatchObject({id: 1, price: 10});
        expect(result).toHaveProperty('id', 1);
    });
});

describe('registerUser', () => {
    it('should throw error if username is falsy', () => {
        // falsy values in JS
        // Null, undefined, NaN, '', 0, false

        const parameters = [null, undefined, NaN, '', 0, false];
        parameters.forEach((param) => {
            expect(() => { lib.registerUser(param); }).toThrow();
        })
    });

    it('should return a user object if valid username if passed', () => {
        const result = lib.registerUser('Prajwal');
        expect(result).toMatchObject({ username: 'Prajwal' });
        expect(result.id).toBeGreaterThan(0);
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





