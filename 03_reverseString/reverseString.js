const reverseString = function(string) {
    let reverse = '';
    let array = string.split('');

    for (let i = array.length; i > 0; i--) {
        let lastChar = array.pop();
        reverse += lastChar;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
