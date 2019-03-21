let car = {
    make: 'honda',
    model: 'civic',
    year: 2000,
    fuel: 'petrol',
    mileage: 350453
};

for (let key in car) {
    console.log(key, car[key]);
}
