const numbers = [1, -1, 2, 3];

let sum = 0;

for (let n of numbers) {
    sum += n;
}

console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum2);

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum3 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum3);

const sum4 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum4);
