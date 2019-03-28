const circleToCopy = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const copiedCircle = {};

// this is old way to do the copying
for (let key in circleToCopy) {
    copiedCircle[key] = circleToCopy[key];
    //copiedCircle['radius'] = circleToCopy['radius'];
}

console.log(copiedCircle);
copiedCircle.draw();

const copiedCircle2 = Object.assign({}, circleToCopy);
console.log(copiedCircle2);

const copiedCircle3 = Object.assign({
    color: 'yellow'
}, circleToCopy);
console.log(copiedCircle3);

// ...spread operator
const copiedCircle4 = { ...circleToCopy };
console.log(copiedCircle4);

circleToCopy.radius = 2;
console.log(circleToCopy);
console.log(copiedCircle4);
