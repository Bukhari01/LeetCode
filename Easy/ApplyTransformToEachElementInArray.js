const plusOne = function(n) {
    return n + 1;
};

const map = (arr, fn) => arr.map(fn);
console.log(map([1,2,3], plusOne));