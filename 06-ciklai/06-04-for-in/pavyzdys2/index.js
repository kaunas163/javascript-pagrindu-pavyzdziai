const person = {
    name: 'Ieva',
    age: 25
};

for (let key in person) {
    console.log(key);
}

console.log();

// dot notation
person.name;

console.log(person.name);

// bracket notation
person['name'];

console.log(person['name']);

console.log();

for (let key in person) {
    console.log(key, person[key]);
}
