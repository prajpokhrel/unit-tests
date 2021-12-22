const db = require('./db');

// Testing numbers

// refactored code - tests works just fine
module.exports.absolute = function(number) {
    return (number >= 0) ? number : -number;
}

// generic code
// module.exports.absolute = function(number) {
//     if (number > 0) return number;
//     if (number < 0) return -number;
//     return 0;
// }

// Testing strings
module.exports.greet = function(name) {
    return 'Welcome ' + name + '!';
}

// Testing arrays
module.exports.getCurrencies = function() {
    return ['USD', 'AUD', 'EUR'];
}

// Testing objects
module.exports.getProduct = function(productId) {
    return {id: productId, price: 10, category: 'Food'};
}

// Testing exceptions
module.exports.registerUser = function(username) {
    if (!username) throw new Error('Username is required');

    return {id: new Date().getTime(), username: username};
}

// Mock functions
module.exports.applyDiscount = function(order) {
    const customer = db.getCustomerSync(order.customerId);

    if (customer.points > 10) {
        order.totalPrice *= 0.9;
    }
}
