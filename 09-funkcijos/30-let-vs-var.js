let x = 0;
var y = 0;

// first issue - block/function scope

function dummy1() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

dummy1();

function dummy2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

dummy2();
