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
    return 'Welcome ' + name;
}

// Testing arrays
module.exports.getCurrencies = function() {
    return ['USD', 'AUD', 'EUR'];
}

