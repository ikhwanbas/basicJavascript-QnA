let input = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];

function CharacterRemoval(strArr) {
    let word = strArr[0]
    console.log(word)

    let dictionary = strArr[1].split(",")
    console.log(dictionary)

    let newDictionary = []

    dictionary.forEach(element => {
        console.log(element)
        let boolean = true

        let newElement = element.split("")
        console.log(newElement)

        newElement.forEach(letter => {
            if (word.indexOf(letter) === -1) {
                boolean = false
            }
        })
        if (boolean) {
            newDictionary.push(element)
        }
    });

    // cari karakter terpanjang
    if (newDictionary.length !== 0) {
        let longestWordLength = newDictionary.sort((a, b) => b.length - a.length)[0].length
        console.log(longestWordLength)
        return word.length - longestWordLength
    } else {
        return word.length
    }

}

// console.log(CharacterRemoval(["baseball", "c,ball"]))

// console.log(CharacterRemoval(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]))
console.log(CharacterRemoval(["worlcde", "apple,bat,car,goodbye,hello,yellow,why,world"]))
// console.log(CharacterRemoval(["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]))