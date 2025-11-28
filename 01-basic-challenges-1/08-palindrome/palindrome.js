// function isPalindrome(str) {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = formattedStr.split('').reverse().join('');
//     return formattedStr  === reversedStr;
// }

function isPalindrome(str) {
    return isAlphaNumeric('a')
}

function removeAlphaNumeric(str){
    let formattedStr = ''

    // .replace(/[^a-z0-9]/g
}

function isAlphaNumeric(char){
    const code = char.charCodeAt(0)

    return(
        (code >= 48 && code <= 57) || // Numbers 0-9
        (code >= 97 && code <= 122) // Lowercase a-z
    )
}

function reverseString(str){

}

module.exports = isPalindrome;
