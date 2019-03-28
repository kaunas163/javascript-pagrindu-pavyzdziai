const numbers = [ 3, 4 ];
console.log(numbers);

// error, coz const doesn't allow to reasign to
// new array, but we can change what is inside
// an array
// numbers = [];

// end

numbers.push(5, 6);
console.log(numbers);

// beginning

numbers.unshift(1, 2);
console.log(numbers);

// middle

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);
