// An isogram is a word that has no repeating letters, consecutive or non - consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram.
// Ignore letter case.

// ANSWER :
// CARA I  
function isIsogram(str) {
    //do code here 
    str = str.toLowerCase()
    return str.split("").every((c, i) => str.indexOf(c) == i)

}

console.log(isIsogram("Dermatoglyphics") == true)
console.log(isIsogram("aba") == false)
console.log(isIsogram("moOse") == false) // -- ignore letter case


// cara II
function isIsograms(str) {
    //do code here 
    return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsograms("Dermatoglyphics") == true)
console.log(isIsograms("aba") == false)
console.log(isIsograms("moOse") == false) // -- ignore letter case

