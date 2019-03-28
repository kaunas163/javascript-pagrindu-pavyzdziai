// Value vs Reference types

// Value types:
// - Number
// - String
// - Boolean
// - Symbol
// - undefined
// - null

// Reference types:
// - Object
// - Function
// - Array

let valuex = 10;
let valuey = valuex;

valuex = 20;

console.log('value x', valuex);
console.log('value y', valuey);

let referencex = { value: 10 };
let referencey = referencex;

referencex.value = 20;

console.log('reference x', referencex);
console.log('reference y', referencey);

// primitives are copied by their value
// objects are copied by their reference

let numberToIncrease = 10;

function increase(number) {
    number++;
}

console.log('before increase function', numberToIncrease);
increase(numberToIncrease);
console.log('after increase function', numberToIncrease);

let objValueToIncrease = { value: 10 };

function increase2(obj) {
    obj.value++;
}

console.log('before reference increase', objValueToIncrease);
increase2(objValueToIncrease);
console.log('after reference increase', objValueToIncrease);
