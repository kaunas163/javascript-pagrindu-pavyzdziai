let marks = [4, 7, 8, 3, 4, 7, 8, 9, 10, 3];

console.log('teigiami pazymiai');

for (let key in marks) {
    if (marks[key] >= 5) {
        console.log(marks[key]);
    }
}

console.log('neigiami pazymiai');

for (let key in marks) {
    if (marks[key] < 5) {
        console.log(marks[key]);
    }
}
