// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

// CARA I
function arrayDiff(a, b) {
    return a.filter((x) => !b.includes(x))
}

console.log(arrayDiff([], [4, 5]))
// should return [4], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3]))
// should return [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], []))
// should return [1, 8, 2], "a was [1,8,2], b was []");

