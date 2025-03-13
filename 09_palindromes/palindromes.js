const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz-123456789';

    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((char) => alphanumerical.includes(char))
    .join('');

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;