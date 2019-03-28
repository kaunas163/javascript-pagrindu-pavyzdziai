let marks = [4, 7, 8, 3, 4, 7, 8, 9, 10, 3];
let positive = [];
let negative = [];

for (let key in marks) {
    if (marks[key] >= 5) {
        positive[positive.length] = marks[key];
    } else {
        negative[negative.length] = marks[key];
    }
}

console.log('teigiami pazymiai');

for (let key in positive) {
    console.log(positive[key]);
}

console.log('neigiami pazymiai');

for (let key in negative) {
    console.log(negative[key]);
}
