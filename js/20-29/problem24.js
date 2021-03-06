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

let x = [0,1,2]
let z = [0,1,2,3,4,5,6,7,8,9]

console.log(doItAlot(1000000, z))