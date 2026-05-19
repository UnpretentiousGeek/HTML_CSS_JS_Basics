const removeFromArray = function (fixed, ...rest) {
    ans = []
    fixed.forEach(element => {
        if (!rest.includes(element)) {
            ans.push(element)
        }
    });
    return (ans)
};

// Do not edit below this line
module.exports = removeFromArray;
