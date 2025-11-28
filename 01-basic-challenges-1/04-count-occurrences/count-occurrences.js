// function countOccurrences(str, char) {
//     let count = 0;
//     for (let i=0; i < str.length; i++){
//         if (str[i] === char){
//             count++
//         }
//     }
//     return count;
// }

/**
 * The function `countOccurrences` takes a string and a character as input, then returns the number of
 * occurrences of that character in the string.
 * @param str - A string that you want to search for occurrences of a specific character.
 * @param char - The `char` parameter in the `countOccurrences` function represents the character that
 * you want to count the occurrences of in the `str` parameter.
 */
const countOccurrences = (str, char) => str.split(char).length - 1


module.exports = countOccurrences;
