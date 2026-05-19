const reverseString = function (String) {
    ans = ""
    for (let i = String.length - 1; i >= 0; i--) {
        ans = ans + String[i]
    }
    return (ans)

};

// Do not edit below this line
module.exports = reverseString;
