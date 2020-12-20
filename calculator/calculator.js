const Calculator = function () {
  // -- begin of the answer --
  this.evaluate = (params) => {
    return eval(params)
  }
  // --  end of the answer --
};

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);