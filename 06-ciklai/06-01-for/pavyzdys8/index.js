let sum = 10;
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        sum += i;
        count++;
    }
}

console.log(sum);
console.log(count);

let average = sum / count;
console.log(average);
