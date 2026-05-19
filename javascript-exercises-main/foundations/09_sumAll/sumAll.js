const sumAll = function (a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return ("ERROR")
    }

    if (a < 0 || b < 0) {
        return ("ERROR")
    }

    sum = 0
    for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum = sum + i
    }
    return (sum)
};

// Do not edit below this line
module.exports = sumAll;
