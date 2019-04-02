const circleToIterate = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circleToIterate) {
    console.log(key);
}

for (let key in circleToIterate) {
    console.log(key, circleToIterate[key]);
}

// TypeError: circleToIterate is not iterable
// for (let key of circleToIterate) {
//     console.log(key);
// }

for (let key of Object.keys(circleToIterate)) {
    console.log(key);
}

console.log(Object.keys(circleToIterate));
console.log(Object.entries(circleToIterate));

for (let entry of Object.entries(circleToIterate)) {
    console.log(entry);
}

if ('radius' in circleToIterate) {
    console.log('radius exists');
} else {
    console.log('radius doesnt exist');
}

if ('color' in circleToIterate) {
    console.log('color exist');
} else {
    console.log('color doesnt exist');
}
