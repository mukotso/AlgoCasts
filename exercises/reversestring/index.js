// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // return str.split('').reverse().join('')
    
    // solution 2
    // let reversedString = ""

    // for( let char of str){
    //     reversedString = char + reversedString
    // }

    // return reversedString

    // solution 3

  return  str.split('').reduce((reversedString, character)=>{
            return character + reversedString
    }, "")
}

module.exports = reverse;
