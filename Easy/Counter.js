let array = [];

const createCounter = function(n) {
    let count = n - 1;  // Start at n - 1 to return 'n' on the first call
    return function() {
        count = count + 1;
        array.push(count);
        console.log(array[array.length - 1]);
        return count;
    }
}

const counter = createCounter(-2);
counter(); // 0
counter(); // 1
counter(); // 2
