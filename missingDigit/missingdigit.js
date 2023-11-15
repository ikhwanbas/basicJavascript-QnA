function MissingDigit(str) {
    let arr = (str.split(" "))

    let a = arr[0]
    let b = arr[2]
    let operand = arr[1]
    let result = arr[4]

    let indexOfX
    arr.forEach((item, ind) => {
        if (item.indexOf("x") !== -1) {
            indexOfX = ind
        }
    })
    let xNumber = arr[indexOfX]

    // calculate number that has missing digit
    let number
    if (indexOfX === 0) {
        switch (operand) {
            case "+":
                number = result - b
                break;
            case "-":
                number = result + b
                break;
            case "*":
                number = result / b
                break;
            case "/":
                number = result * b
                break;
        }
    } else if (indexOfX === 2) {
        switch (operand) {
            case "+":
                number = result - a
                break;
            case "-":
                number = a - result
                break;
            case "*":
                number = result / a
                break;
            case "/":
                number = a / result
                break;
        }
    } else if (indexOfX === 4) {
        switch (operand) {
            case "+":
                number = a + b
                break;
            case "-":
                number = a - b
                break;
            case "*":
                number = a * b
                break;
            case "/":
                number = a / b
                break;
        }
    }

    let indexOfXInNumber = xNumber.indexOf("x")
    let results = number.toString().split("")[indexOfXInNumber]

    return results
}

console.log(MissingDigit("4 - 2 = x"))
console.log(MissingDigit("1x0 * 12 = 1200"))
console.log(MissingDigit("12 * 1x0 = 1200"))

