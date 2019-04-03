// Function declaration

walk(); // can be called anywhere

function walk() {
    console.log('walk');
}

// function expression

// run(); // error, cannot be called before defined

// console.log(x);
// let x = 1;

const run = function() {
    console.log('run');
};

// we call hoisting when javascript moves
// all functions declarations to top of the file
