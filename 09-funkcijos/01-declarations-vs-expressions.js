// Function Declaration

function walk() {
    console.log('walk');
}

// Function Expression

// let run = function() {};
// let x = 1;

// named function expression
// let run = function walk() {};

// anonymous function expression
// let run = function() {};

let run = function() {
    console.log('run');
};

run();

let move = run; // same thing in memory
move();
