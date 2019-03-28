const numbers = [1, 2, 3];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

const numbers2 = [1, -1, 2, 3];

const allPositive2 = numbers2.every(function (value) {
    return value >= 0;
});

console.log(allPositive2);

const atLeastOnePositive = numbers2.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// every() and some() are new in javascript so some older browsers doesn't support them
