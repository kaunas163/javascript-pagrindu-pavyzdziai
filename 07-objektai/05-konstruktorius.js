// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Constructor function

// constructor name by convention should be in pascal notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(2);
console.log(circle);
circle.draw();
