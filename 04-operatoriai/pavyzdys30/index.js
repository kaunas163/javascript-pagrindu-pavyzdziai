// falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN

// anything that is not falsy -> truthy

console.log(false || true); // falsy
console.log(false || 'Ieva'); // truthy
console.log(false || 1); // truthy

// short-circuiting
console.log(false || 1 || 2); // truthy, returns the first truthy that he finds
