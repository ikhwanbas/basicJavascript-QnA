function findUniq(arr) {
    arr.sort((x, y) => x - y)
    return (arr[0] !== arr[1] ? arr[0] : arr.pop())
}


console.log(findUniq([3, 3, 3, 2, 3, 3]))

console.log(findUniq([1, 1, 1, 2, 1, 1]))
//  === 2
console.log(findUniq([0, 0, 0.55, 0, 0]))
// === 0.55




// important notes
// var arr = ['z', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
// var maps = arr.reduce(function (prev, cur) {
//     prev[cur] = (prev[cur] || 0) + 1;
//     return prev;
// }, {});


// console.log(maps)


