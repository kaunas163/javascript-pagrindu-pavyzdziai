// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory function

function createCircle(radius, location, isVisible) {
    return {
        // if property and argument match, we can write just:
        // radius - this will be same as radius: radius
        radius,
        location: location,
        isVisible: isVisible,
        // draw: function() {
        //     console.log('draw');
        // }
        draw() {
            console.log('draw');
        }
    };
}

let circle = createCircle(2, {x: 1, y: 2}, false);
console.log(circle);
circle.draw();

let circle2 = createCircle(1, {x: 5, y: 2}, true);
console.log(circle2);
