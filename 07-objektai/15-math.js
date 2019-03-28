// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomBetween(1, 10));
console.log(getRandomBetween(1, 10));
console.log(getRandomBetween(1, 10));

console.log(Math.round(1.9));
console.log(Math.round(2.3));
console.log(Math.round(1.4));

console.log(Math.max(4, 7, 8, 5, 2, 4));

console.log(Math.min(4, 7, 8, 5, 2, 3));
