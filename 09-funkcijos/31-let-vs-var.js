// var => function-scoped variables
// ES6 (ES2015): let, const => block-scoped variables

function dummy() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
            // let color = 'red';
        }
    }

    console.log(color);
}

dummy();
