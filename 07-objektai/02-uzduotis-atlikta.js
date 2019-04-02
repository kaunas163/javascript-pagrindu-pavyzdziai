/* Sukurkite objektą informacijai apie studentą saugoti.
Jame turi būti šie duomenys:
- vardas
- pavardė
- amžius
- kur mokosi:
-- aukštosios mokyklos pavadinimas
-- studijų programos pavadinimmas
-- miestas
-- kursas
- šiuo metu priskirti moduliai (masyvas),
  kiekvienas modulis kaip objektas:
-- pavadinimas
-- kreditai
-- atsiskaitymai
--- pavadinimas
--- tipas (kontrolinis, laboratorinis, egzaminas ar pan.)
--- pažymys
Taip pat, jame turi būti šie metodai:
- kokios nors bazinės informacijos išvedimas
- vidurkio skaičiavimas
*/

let student = {
    vardas: 'a',
    pavarde: 'b',
    amzius: 20,
    universitetas: {
        pavadinimas: 'a',
        programa: 'dhf',
        miestas: 'ads',
        kursas: 2
    },
    moduliai: [
        {
            pavadinimas: 'sgd',
            kreditai: 6,
            atsiskaitymai: [
                {
                    pavadinimas: 'sfb',
                    tipas: 'afsg',
                    pazymys: 5,
                },
                {
                    pavadinimas: 'sgdf',
                    tipas: 'dhfg',
                    pazymys: 10,
                },
                {
                    pavadinimas: 'tj',
                    tipas: 'fgfg',
                    pazymys: 7,
                },
            ]
        },
        {
            pavadinimas: 'shdfjg',
            kreditai: 6,
            atsiskaitymai: [
                {
                    pavadinimas: 'sfb',
                    tipas: 'afsg',
                    pazymys: 5,
                },
                {
                    pavadinimas: 'sgdf',
                    tipas: 'dhfg',
                    pazymys: 10,
                },
                {
                    pavadinimas: 'tj',
                    tipas: 'fgfg',
                    pazymys: 7,
                },
            ]
        }
    ],
    isvestiPilnaVarda() {
        return this.vardas + ' ' + this.pavarde;
    }
};

let student2 = {
    vardas: 'a',
    pavarde: 'b',
    amzius: 20,
    universitetas: {
        pavadinimas: 'a',
        programa: 'dhf',
        miestas: 'ads',
        kursas: 2
    },
    moduliai: [
        {
            pavadinimas: 'sgd',
            kreditai: 6,
            atsiskaitymai: [
                {
                    pavadinimas: 'sfb',
                    tipas: 'afsg',
                    pazymys: 5,
                },
                {
                    pavadinimas: 'sgdf',
                    tipas: 'dhfg',
                    pazymys: 10,
                },
                {
                    pavadinimas: 'tj',
                    tipas: 'fgfg',
                    pazymys: 7,
                },
            ]
        },
        {
            pavadinimas: 'shdfjg',
            kreditai: 6,
            atsiskaitymai: [
                {
                    pavadinimas: 'sfb',
                    tipas: 'afsg',
                    pazymys: 5,
                },
                {
                    pavadinimas: 'sgdf',
                    tipas: 'dhfg',
                    pazymys: 10,
                },
                {
                    pavadinimas: 'tj',
                    tipas: 'fgfg',
                    pazymys: 7,
                },
            ]
        }
    ],
    isvestiPilnaVarda() {
        return this.vardas + ' ' + this.pavarde;
    }
};
