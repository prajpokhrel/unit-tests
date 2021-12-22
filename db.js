module.exports.getCustomerSync = function(id) {
    console.log('Reading a customer from database...');
    return { id: id, points: 11 };
}

module.exports.getCustomer = async function(id) {
    return new Promise((resolve, reject) => {
        console.log('Reading a customer from database...');
        resolve({ id: id, points: 11 });
    });
}
