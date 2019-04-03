// getters => access properties
// setters => change (mutate) them

const person = {
    name: 'ccc',
    surname: 'ddd',
    // getter
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    // setter
    set fullName(value) {
        const parts = value.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
};

console.log(person.fullName); // getter

console.log(person);

person.fullName = 'something else'; // setter
console.log(person);
