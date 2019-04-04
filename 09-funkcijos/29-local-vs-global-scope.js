const color = 'red'; // has global scope

function dummy1() {
    const message = 'hi';
    console.log(color);
}

function dummy2() {
    const message = 'bye';
    const color = 'blue'; // local have precedence over global variables
    console.log(color);
}

dummy1();
dummy2();
