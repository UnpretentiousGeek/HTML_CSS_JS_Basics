const palindromes = function (sen) {

    sen = sen.replaceAll(' ', '').replaceAll(',', '').replace(/[.,!?;:'"]/g, '').toLowerCase()

    newSen = ''
    for (i = sen.length - 1; i >= 0; i--) {
        newSen = newSen + sen[i]
    }

    return (sen === newSen)

};

// Do not edit below this line
module.exports = palindromes;
