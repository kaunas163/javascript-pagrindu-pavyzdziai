// Dynamic nature of objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(2);
console.log(circle);
circle.draw();

circle.color = 'yellow';
circle.move = function() {
    console.log('move');
}

console.log(circle);

delete circle.color;
delete circle.move;

console.log(circle);

// circle = {}; // error, cannot reasign, but properties can be changed
