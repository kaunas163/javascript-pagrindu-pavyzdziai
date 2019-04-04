/**
 * Parašykite area metodą:
 * - šis metodas turi būti tik get, t.y. jo negalima pakeisti
 * - turi paskaičiuoti plotą pagal formulę:
 *   Math.PI * apskritimo plotas * apskritimo plotas
 */

const circle = {
    radius: 1,
    
};

/* Rezultatai:
3.141592653589793
12.566370614359172
12.566370614359172 */

console.log(circle.area);

circle.radius = 2;
console.log(circle.area);

circle.area = 1;
console.log(circle.area);
