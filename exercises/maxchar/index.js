// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charsMap = {}
    let max = 0
    let maxChar = ""

    for (let char of str) {
        if (charsMap[char]) {
            charsMap[char]++
        } else {
            charsMap[char] = 1
        }
    }

    for ( let ch in charsMap){
        if(charsMap[ch] > max){
            max = charsMap[ch]
            maxChar = ch

        }
    }

    return maxChar
}

module.exports = maxChar;
