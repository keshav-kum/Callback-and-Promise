function multiplyWithCallback(numbers, callback) {
    const multipliedArray = numbers.map((num) =>  num * 2 );
    callback(multipliedArray);
}

const inputArray = [1, 2, 3, 4];
multiplyWithCallback(inputArray, (result) => {
    console.log(result);
});

