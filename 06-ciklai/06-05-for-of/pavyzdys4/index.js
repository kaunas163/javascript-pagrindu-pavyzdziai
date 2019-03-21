let marks = [4, 7, 5, 6, 3, 7, 8, 9, 10, 2];

let selected = [];

for (let mark of marks) {
    if (mark >= 5 && mark % 2 === 0) {
        selected[selected.length] = mark;
    }
}

console.log('teigiami lyginiai pazymiai');

for (let mark of selected) {
    console.log(mark);
}

let sum = 0;

for (let mark of selected) {
    sum += mark;
}

let avg = sum / selected.length;

console.log('atrinktu pazymiu vidurkis', avg);
