/**
 * @param {number} millis
 * @return {Promise}
 */

let t = Date.now();

const sleep = function (millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
};

const main = async () => {
    console.log(t);
    await sleep(100); 
    console.log(Date.now() - t); 
};

main();

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */