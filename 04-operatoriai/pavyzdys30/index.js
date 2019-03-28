// falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN

// anything that is not falsy -> truthy

let vardas = "Ieva";

console.log(false || true); // falsy
console.log(false || "Ieva"); // truthy
console.log(false || !vardas);
console.log(false || 1); // truthy

// short-circuiting
console.log(false || 2 || 1); // truthy, returns the first truthy that he finds
