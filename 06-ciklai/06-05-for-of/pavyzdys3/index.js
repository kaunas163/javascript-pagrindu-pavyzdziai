let marks = [4, 7, 5, 6, 3, 7, 8, 9, 10, 2];

let positive = [];
let negative = [];

for (let mark of marks) {
    if (mark >= 5) {
        positive[positive.length] = mark;
    } else {
        negative[negative.length] = mark;
    }
}

console.log('teigiami pazymiai');

for (let mark of positive) {
    console.log(mark);
}

console.log('neigiami pazymiai');

for (let mark of negative) {
    console.log(mark);
}
