function reverseMyName(str) {
    // -- begin of answer code -- 
    return str.split('').reverse('').join('')
    // -- end of answer code --
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson", "noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")