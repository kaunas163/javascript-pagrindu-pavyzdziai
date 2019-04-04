function sum() {
    let total = 0;
    // arguments is iterable object so this is why for of works
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
