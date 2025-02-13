const input = -121;

const reverseInteger = function(num) {
    let reversed = num.toString().split('').reverse().join(''); 
    console.log(reversed);
    return reversed;
};

if(input == reverseInteger(input)) {
    console.log(true)
    return true;
} else {
    console.log(false)
    return false;
}
