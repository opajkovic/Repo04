function main() {
  var myDecimal = 8.2;
  var myDecimalE = 2.54e-3;

  myDecimal = myDecimal.toPrecision(3);
  myDecimalE = myDecimalE.toPrecision();

  return {
    myDecimal,
    myDecimalE
  };

}

console.log(main());
module.exports = main;