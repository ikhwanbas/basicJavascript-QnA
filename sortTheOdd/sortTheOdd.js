// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.If you have an empty array, you need to return it.


function sortArray(array) {
    // find the odd number of array, then sort it
    const odd = array.filter((x) => x % 2).sort((x, y) => x - y)
    // map the array, if found the odd return the first odd, else return the even number
    return array.map((x) => (x % 2) ? odd.shift() : x)
}


// console.log(sortArray([5, 3, 2, 8, 1, 4]))
//  should return [1, 3, 2, 8, 5, 4]

console.log(sortArray([1, 3, 2, 8, 5, 4, 11]))

console.log(sortArray([2, 22, 1, 5, 4, 11, 37, 0]))
console.log(sortArray([1, 1, 5, 11, 2, 1, 11, 0]))
console.log(sortArray([100, 5, 6, 3]))