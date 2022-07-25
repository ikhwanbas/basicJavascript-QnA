
const nums = [3, 2, 3]
const target = 6
const output = [0, 1]

let a
let b

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

        if (nums[i] + nums[j] === target) {
            console.log(nums[i])
            a = i
            b = j
        }
    }
}

const res = [a, b]
console.log(res.sort((a, b) => { b - a }))