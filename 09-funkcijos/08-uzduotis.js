/**
 * Parašykite describeArguments funkciją, kuri gautų bet kokius argumentus.
 * 
 * Patikrinkite ar šiai funkcijai buvo perduoti kokie nors argumentai.
 * Jei funkcija negavo jokių argumentų, tuomet išveskite tekstą,
 * kad vartotojas turi funkcijai suteikti argumentų, bei
 * nutraukite funkcijos darbą su return;
 * 
 * Eikite per visus gautus argumentus ir tikrinkite jų tipus.
 * Išvedime išveskite patį argumentą, bei atsakymą.
 * Tikrinimui užtenka pažiūrėti ar tai skaičius, ar tai tekstas,
 * o kitais atvejais išveskite, kad 'nežinomas'.
 */

/* Turite gauti šiuos rezultatus:
1 'yra skaicius'
4 'yra skaicius'
5 'yra skaicius'
8 'yra skaicius'
a yra tekstas
7 'yra skaicius'
true 'yra nezinomas'
false 'yra nezinomas'
null 'yra nezinomas'
undefined 'yra nezinomas'
a yra tekstas
1 'yra skaicius'
b yra tekstas
8 'yra skaicius'
undefined 'yra nezinomas'
turite funkcijai duoti argumentu
*/

describeArguments(1, 4, 5, 8);
describeArguments('a', 7, true, false, null, undefined);
describeArguments('a', 1, 'b', 8, undefined);
describeArguments();

function describeArguments() {
    
}

