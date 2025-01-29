const repeatString = function(word, n) {
    let string = '';

    for (let i = 0; i < n; i++) {
        string += word;
    }

    if (n < 0) {
        return 'ERROR';
    } else {
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
