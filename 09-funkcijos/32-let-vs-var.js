// second issue - global scope and window object

var first = 'red';
let second = 'blue';

// in browser console:
// window.first will be available
// window.second will be undefined

function dummy() {
    console.log('hi');
}

// window.dummy() - globally on window object
