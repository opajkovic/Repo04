function main(numOne, numTwo) {
    var remainder;
    remainder = parseInt(numOne) % parseInt(numTwo);

    return remainder;
}

console.log(main(5, 2));
console.log(main(15, 4));
console.log(main(102, 25));
module.exports = main;
