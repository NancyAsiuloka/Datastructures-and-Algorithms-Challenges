function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return formattedStr;
}

module.exports = isPalindrome;
