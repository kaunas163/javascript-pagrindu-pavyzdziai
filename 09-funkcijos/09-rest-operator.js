// ...args - rest operator, used with arguments
function dummy(a, b, ...args) {
    console.log(args);
}

function dummy2(a, b) {
    console.log(arguments);
}

dummy(1, 2, 3, 4, 5);
dummy2(1, 2, 3, 4, 5);
