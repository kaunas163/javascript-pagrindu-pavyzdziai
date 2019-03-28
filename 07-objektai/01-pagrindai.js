// Object-oriented Programming (OOP)

// let radius = 1;
// let x = 1;
// let y = 1;

// function draw() {}
// function move() {}

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

console.log(circle);
circle.draw();
