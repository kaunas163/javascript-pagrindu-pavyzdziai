function createCircle(radius, location, isVisible) {
    return {
        radius,
        location: location,
        isVisible: isVisible,
        draw() {
            console.log('draw');
        }
    };
}

let circleFactory = createCircle(2, {x: 1, y: 2}, false);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circleConstructor = new Circle(2);

// Constructor property

console.log(circleFactory.constructor);
console.log(circleConstructor.constructor);

let someEmptyObject = {};
// javascript will auto create something like:
// let someEmptyObject = new Object();

// new String(); // same as using string literal, like: '', "", ``
// new Boolean(); // but we use boolean literals, like: true, false
// new Number(); // 1, 2, 3, ...
