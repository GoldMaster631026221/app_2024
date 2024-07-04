function sum (...numbers) {
    var sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4));
