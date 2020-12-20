const isPrime = num => {
  // do code here
  if (num <= 1) return `${num}` + ' IS NOT A PRIME'; // negatives
  if (num % 2 == 0 && num > 2) return `${num}` + ' IS NOT A PRIME'; // even numbers
  let s = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
    if (num % i === 0) return `${num}` + ' IS NOT A PRIME'; // modulo shows a divisor was found
  }
  return `${num}` + ' IS A PRIME';
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

