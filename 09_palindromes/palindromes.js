const palindromes = function (original) {
    const cleaned = cleanInput(original);
    const reverse = reverseInput(cleaned);

    if (cleaned === reverse) {
        return true;
    } else {
        return false;
    }
};

const cleanInput = (original) => {
    return original.replace(/\W/g, "").toLowerCase();
}

const reverseInput = (cleaned) => {
    return cleaned.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
