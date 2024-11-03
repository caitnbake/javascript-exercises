const palindromes = function (original) {
    const cleaned = cleanInput(original);
    const reverse = reverseInput(cleaned);

    return cleaned === reverse;
};

const cleanInput = (original) => {
    return original.replace(/\W/g, "").toLowerCase();
}

const reverseInput = (cleaned) => {
    return cleaned.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
