// falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN

let defaultColor = 'blue';

let userColor = undefined;
let currentColor = userColor || defaultColor;

console.log(currentColor);

userColor = 'red';
currentColor = userColor || defaultColor;

console.log(currentColor);
