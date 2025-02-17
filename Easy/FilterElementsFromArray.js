const filter = function(arr, fn) {
    let filteredArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { 
            filteredArr.push(arr[i]); 
        }
    }
    return filteredArr;
}

const fn = function(n,i) {
    return i === 0; 
};


const array = [0,10,20,30];
console.log(filter(array, fn)); 