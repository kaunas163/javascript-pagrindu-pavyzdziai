const numbers = [1, 2, 3, 1, 4];

console.log('a', numbers.indexOf('a'));
console.log(1, numbers.indexOf(1));
console.log('1', numbers.indexOf('1'));

console.log('last index of 1', numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

console.log(numbers.indexOf(1, 2));
