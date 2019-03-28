const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});

console.log(filtered);

const filtered2 = numbers.filter(value => value >= 0);
console.log(filtered2);

const filtered3 = numbers.filter(n => n >= 0);
console.log(filtered3);

