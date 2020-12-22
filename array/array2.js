// get the fullName : 
let array = [
    { firstName: 'bayu' },
    { lastName: 'setiawan' },
    { umur: '23' }
]

function fullName(arr) {
    return arr[0].firstName + ' ' + arr[1].lastName
}

const a = fullName(array)
// should return 'bayu setiawan'
console.log(a)