const person = {
    name: 'ccc',
    surname: 'ddd',
    set fullName(value) {
        // check for errors before executing
        // it's called defensive programming

        // if (typeof value !== 'string') return;

        if (typeof value !== 'string') {
            throw new Error('Value is not a string.');
        }

        const parts = value.split(' ');

        if (parts.length !== 2) {
            throw new Error('Enter name and surname.');
        }

        this.name = parts[0];
        this.surname = parts[1];
    }
};

// const e = new Error(); // error object
// throw e; // exception

// person.fullName = true; // not a function
// person.fullName = null; // cannot read split

try {
    person.fullName = null;
} catch (e) {
    // e - error object
    console.log(e);
}

try {
    person.fullName = '';
} catch (e) {
    // e - error object
    console.log(e);
}
