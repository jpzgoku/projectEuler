// sieve of eratoshenes
let primes = n => {
    let ps = [];
    let sieve = function() {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(true)
        }
        return arr;
    }();
    for (let p = 2; p <= n; p++) {
        if (sieve[p]) {
            ps.push(p)
            for (let j = p * p; j <= n + 1; j += p) {
                sieve[j] = false;
            }
        }
    }
    return ps;
};

/* Changes the origional array and returns a bool on
wether there are any more possible permutations. */
function nextPermutation(array) {
    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    if (i <= 0)
        return false;

    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
};

function doItAlot(n, arr) {
    for (let i = 1; i < n; i++) {
        nextPermutation(arr);
    }
    return arr;
};

/* Any three number sequence with equal distance
among two neighbouring terms. */












