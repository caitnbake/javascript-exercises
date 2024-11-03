const fibonacci = function(n) {
    n = +n;
    if (n === 0 || n === 1) {
        return n;
    }

    if (n < 0) return "OOPS";

    let fibonacci = [1,1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    return fibonacci[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
