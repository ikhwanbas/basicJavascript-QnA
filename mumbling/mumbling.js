// This time no story, no theory.The examples below show you how to write function accum:

// CARA I
function accum(s) {
    // split the string 
    let word = s.split("")
    let result = []
    for (var x = 0; x < word.length; x++) {
        let lowerCase = []
        for (var y = 0; y < x; y++) {
            lowerCase.push(word[x].toLowerCase())
        }
        result.push(word[x].toUpperCase() + lowerCase.join(""))
    }
    return result.join("-")
}


console.log(accum("abcd"))
//   "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty"))
//   "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"))
//  "C-Ww-Aaa-Tttt"

// CARA II
function accums(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accums("abcd"))
//   "A-Bb-Ccc-Dddd"
console.log(accums("RqaEzty"))
//  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accums("cwAt"))
//  "C-Ww-Aaa-Tttt"
