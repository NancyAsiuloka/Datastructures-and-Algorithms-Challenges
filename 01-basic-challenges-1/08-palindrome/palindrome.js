function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = formattedStr.split('').reversed().join('')
    return formattedStr;
}

module.exports = isPalindrome;
