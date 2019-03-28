const numbers = [1, 2, 3, 4];

const items = numbers.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const mappedToObjects = numbers.map(n => {
    const obj = { value: n };
    return obj;
});

console.log(mappedToObjects);

const mappedToObjects2 = numbers.map(n => {
    return { value: n };
});

console.log(mappedToObjects2);

const mappedToObjects3 = numbers.map(n => { value: n });
console.log(mappedToObjects3);

const mappedToObjects4 = numbers.map(n => ({ value: n }));
console.log(mappedToObjects4);

const numbers2 = [-2, -3, 1, 2, 7, -5, 6];

const itemsFromNumbers2 = numbers2
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(itemsFromNumbers2);

const items2FromNumbers2 = numbers2
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 3);

console.log(items2FromNumbers2);

const items3FromNumbers2 = numbers2
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 3)
    .map(obj => obj.value);

console.log(items3FromNumbers2);
