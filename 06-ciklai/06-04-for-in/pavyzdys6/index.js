let car = {
    make: 'honda',
    model: 'civic',
    year: 2000,
    fuel: 'petrol',
    mileage: 350453
};

let line = '';

for (let key in car) {
    line += key + ': ' + car[key] + '\n';
}

console.log(line);
