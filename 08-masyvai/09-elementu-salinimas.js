const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// end

const last = numbers.pop();
console.log(numbers);
console.log(last);

// beginning

const first = numbers.shift();
console.log(numbers);
console.log(first);

// middle

numbers.splice(3, 1);
console.log(numbers);

numbers.splice(2, 4);
console.log(numbers);
