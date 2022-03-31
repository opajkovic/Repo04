function main(numOne, numTwo) {
  
    var product= parseFloat(numOne) * parseFloat(numTwo);
    return parseFloat(product);
  }
  
  console.log(main(2.5,2.0));
  console.log(main(5.5,5.5));
  console.log(main(100.25,43.20));
  
  module.exports = main;