// You receive the name of a city as a string,
//  and you need to return a string that shows 
// how many times each letter shows up in the string by using asterisks(*).


// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters(not the dashes, spaces, apostrophes, etc).There should be no spaces in the output, and the different letters are separated by a comma(,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -- > "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -- > "l:*,a:**,s:**,v:*,e:*,g:*"

// CARA I 

function getStrings(city) {
    const splitCity = city.toLowerCase().split("")

    const count = splitCity.reduce(function (prev, curr) {
        prev[curr] = (prev[curr] || '') + '*'
        return prev
    }, {})

    let result = []
    for (var key in count) {
        if (key != 0) {
            result.push(key + ':' + count[key])
        }
    }
    return result.join()
}


console.log(getStrings("Chicago") === "c:**,h:*,i:*,a:*,g:*,o:*");

console.log(getStrings("Bangkok") === "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas") === "l:*,a:**,s:**,v:*,e:*,g:*");