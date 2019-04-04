// ČIA PROBLEMA (sprendimas sekančiame pavyzdyje)

const person = {
    name: 'aaa',
    surname: 'bbb',
    fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(person.name + ' ' + person.surname);
console.log(`${person.name} ${person.surname}`);
console.log(person.fullName());

// negalim lengviau priskirti išparsinant vardą ir pavardę
// person.fullName = 'some name'; 
