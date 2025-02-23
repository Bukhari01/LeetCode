const addTwoPromises = async function(promise1, promise2) {
    const result = await promise1 + await promise2
    return result
};

const Finalresult = addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)),new Promise(resolve => setTimeout(() => resolve(5), 60))
)

console.log(Finalresult)
