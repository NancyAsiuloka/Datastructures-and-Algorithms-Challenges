// function removeDuplicates(arr) {
//     const uniqueArray = [];

//     for(let i = 0; i < arr.length; i++){
//         if(!uniqueArray.includes(arr[i])){
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }

function removeDuplicates(arr) {
    console.log(arr)
    return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
