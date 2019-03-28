function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Functions are objects

console.log('constructor name', Circle.name);
console.log('number of arguments', Circle.length);

console.log(Circle.constructor);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

let circle = new Circle1(1);
console.log(circle);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
