console.log('labas');
console.log('krabas');
console.log('SDGFH\nSYFTUTY')
console.log('ajsgjhdfg')
console.log("sjhdgbjhdf");

// alert('sdgdfg');

let skaicius = 5;

console.log(skaicius);
console.log('skaicius toks:', skaicius);
console.log('skaicius toks: ' + skaicius);

// echo "sjhgbhfd" . $sjgbdhf

let skaicius2 = 9;

console.log('skaicius 1', skaicius,
    'skaicius 2', skaicius2);

console.log('skaicius 1 ' + skaicius
    + " skaicius 2 " + skaicius2);

console.log(5 + 3);
console.log(skaicius * skaicius2);

console.log(7 / 2);
console.log(7 % 2);

document.getElementById('turinys').innerHTML = 'nauja reiksme';
document.getElementById('turinys2').innerText = 'nauja kita reiksme';

document.getElementById('turinys').innerHTML = '<h1>nauja antraste</h1>';
document.getElementById('turinys2').innerText = '<h1>nauja antraste</h1>';

let blokai = document.querySelectorAll('.kazkokia');
console.log(blokai);

document.write('pirma teksto eilute<br>');
document.write('antra teksto eilute<br>');
document.write('trecia teksto eilute<br>');

// let vardas; // declaration
// console.log(vardas);

// vardas = 'Gintare'; // initialization
// console.log(vardas);

// var dsdgdfg = 'sgsg';

// const jhsg = 5;
// console.log(jhsg);
// jhsg = 10;
// console.log(jhsg);

let vardas = 'Greta';
let amzius = 22;
let studente = true;
let teises = undefined;
let augintinis = null;

console.log(typeof vardas);
console.log(typeof amzius);
console.log(typeof studente);
console.log(typeof teises);
console.log(typeof augintinis);

vardas = 5;
console.log(typeof vardas);

let zmogus = {
    vardas: 'Ieva',
    amzius: 25
};

console.log(zmogus);

let skaiciai = [4, 7, 8, 9, 6, 5, 4];
console.log(skaiciai);

console.log(zmogus.vardas);
console.log(skaiciai[0]);

skaiciai.push(8);
console.log(skaiciai);

console.log('masyvo ilgis:', skaiciai.length);

console.log(skaiciai);

skaiciai.unshift(88);
console.log(skaiciai);

console.log(typeof zmogus);
console.log(typeof skaiciai);

let a = 5;
let b = 4;

console.log("sum: " + a + b);
console.log("sum: " + (a + b));

let spalvos = ['raudona', 'melyna', 'juoda', 'zalia'];

for (let spalva of spalvos) {
    console.log(spalva);
}

for (let sk of skaiciai) {
    console.log('skaicius is masyvo', sk);
}

let suma = 0;

for (let sk of skaiciai) {
    suma += sk;
}

console.log('skaiciu suma', suma);

let person = {
    name: 'Ieva',
    age: 25
};

for (let key in person) {
    // console.log(key);
    // console.log(person[key]);
    console.log(key, person[key]);
}

let studentas = {
    vardas: "Jonas",
    amzius: 19,
    ugis: 2.0,
    universitetas: 'KTU',
    grupe: 'IFM-5'
};

for (let stud in studentas) {
    console.log(stud + ': ' + studentas[stud]);
}

for (let spalva in spalvos) {
    console.log(spalva);
}

let automobilis = {
    marke: 'jkafbds',
    modelis: 'sjhgbdf',
    keliones: [74, 85, 964, 58, 47],
    technikine: true,
    varomas: {
        kuroTipas: 'benzinas',
        darbinisTuris: 1.6
    },
    vaziuoti: function() {
        console.log('vaziuoja');
    }
};

console.log(automobilis);
automobilis.vaziuoti();

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find(course => course.name === 'a');

console.log(course);

let automobiliai = [
    { marke: 'abc', 'modelis': 'def', rida: 12547 },
    { marke: 'atet', 'modelis': 'etr', rida: 7858 },
    { marke: 'gjhk', 'modelis': 'dhfgh', rida: 78587 },
];

for (let auto of automobiliai) {
    console.log(auto);
}

console.log(automobiliai);

console.log('automobiliai, kuriu rida didesne nei 10k');

for (let auto of automobiliai) {
    if (auto.rida > 10000) {
        console.log(auto);
    }
}

console.log('automobiliai, kuriu rida didesne nei 10k');
let atrinkti = automobiliai.filter(x => x.rida > 10000);
console.log(atrinkti);

let rastas = automobiliai.find(x => x.rida > 10000);
console.log('pirmas rastas', rastas);

let masyvas = [4, 7, 8, 6];
masyvas.filter(x => x > 5);
masyvas.concat([4, 7, 8]);
masyvas.join(', ')
