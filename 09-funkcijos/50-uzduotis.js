/**
 * Funkcijoje countOccurences išmeskite klaidą jeigu gautas
 * 'array' iš tikrųjų nėra array.
 * 
 * Likusią kodo dalį įdėkite į try-catch bloką, bei išveskite
 * klaidos pranešimą.
 */

const numbers = [1, 2, 1, 3, 4];

const count = countOccurences(numbers, 1);
console.log(count);

const count2 = countOccurences(null, 1);
console.log(count2);

function countOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}
