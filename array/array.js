let array = [1, 2, 3, 4, 5]

// should return 
// [
// { ID: 1 },
// { ID: 2 },
// { ID: 3 },
// { ID: 4 },
// { ID: 5 },
// ]

// for biasa
let arr = []
for (i = 0; i < array.length; i++) {
    arr.push({ ID: array[i] })
}
console.log(arr)

// for of 
let arr2 = []
for (let num of array) {
    arr2.push({ ID: num })
}
console.log(arr2)

// using map
const result = array.map(arr => {
    return { ID: arr }
})
console.log(result)