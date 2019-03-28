const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// ... is spread operator
const combined = [...first, ...second]; // 1, 2, 3, 4, 5, 6
console.log(combined);

const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2);

// const copy = combined.slice();
const copy = [...combined];
console.log(copy);
