function list(names) {
    //your code here
    names = names.map(obj => obj.name).join(", ").split("");
    let index = names.lastIndexOf(',')
    names[index] = ' &';
    const result = names.join("");
    return result
}

// Test Question : 
let a = list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Jono' }])
// returns 'Bart, Lisa & Maggie'
console.log(a)

let b = list([{ name: 'Bart' }, { name: 'Lisa' }])
// returns 'Bart & Lisa'
console.log(b)

let c = list([{ name: 'Bart' }])
// returns 'Bart'
console.log(c)

let d = list([])
// returns ''
console.log(d)