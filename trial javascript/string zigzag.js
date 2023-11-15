// Cara I

function stringZigzag(strArr) {
    const numOfArr = strArr[1]
    const str = strArr[0]

    if (str.length < numOfArr || numOfArr === 1) {
        return str
    } else {

        let result = []
        for (let i = 0; i < numOfArr; i++) {
            result.push([])
        }

        console.log(result)

        let arrow = true
        let number = []
        for (let j = 0; j < str.length; j++) {
            if (arrow) {
                for (let i = 0; i < numOfArr - 1; i++) {
                    number.push(i)
                }
                arrow = false
            } else {
                for (let i = numOfArr - 1; i > 0; i--) {
                    number.push(i)
                }
                arrow = true
            }
        }

        let newNum = (number.slice(0, str.length))
        console.log(newNum)

        newNum.forEach((num, i) => {
            result[num].push(str[i])
        })

        const res = result.join(",")
        return res.split(",").join("")
    }

}


// Cara II

// function stringZigzag(strArr) {
//     if (parseInt(strArr[1]) == 1) { return strArr[0]; }
//     let arrStr = strArr[0].split("");
//     let arr = [];
//     for (let i = 0; i < parseInt(strArr[1]); i++) { arr.push(""); }
//     console.log(arr);

//     let row = 0; let down = true;
//     for (let i = 0; i < strArr[0].length; i++) {

//         arr[row] += arrStr[i];

//         console.log([row])

//         if (row == parseInt(strArr[1]) - 1) {
//             down = false;
//         } else if (row == 0) {
//             down = true;
//         }

//         if (down) {
//             row++;
//         } else {
//             row--;
//         }
//     }
//     console.log(arr);

//     return arr.join("");
// }



// console.log(stringZigzag(["kaamvjjfl", 1]) === "kaamvjjfl")
console.log(stringZigzag(["kaamvjjfl", 4]) === "kjajfavlm")
// console.log(stringZigzag(["cat", 5]) === "cat")




