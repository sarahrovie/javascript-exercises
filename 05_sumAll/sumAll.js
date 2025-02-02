const sumAll = function(n1, n2) {
    let sum = 0;
    let start;
    let end;

    if (n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
        return 'ERROR';
    }

    if (n1 < n2) {
        start = n1;
        end = n2;
    } else if (n2 < n1) {
        start = n2;
        end = n1;
    }

    sum = (start + end) * (end - start + 1) / 2;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
