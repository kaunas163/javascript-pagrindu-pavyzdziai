// bitwise operators

// decimal = binary
// 1 = 00000001 - 8 bits or 1 byte
// 2 = 00000010
// R = 00000011 = 3, it will compare each number from binary form

console.log(1 | 2);

// logical operator ||
// bitwise operator |

// 1 = 00000001
// 2 = 00000010
// R = 00000000 = 0

console.log(1 & 2);

// read, write, execute
// 00000100 - only read, decimal number is 4
// 00000110 - read and write
// 00000111 - all permissions

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

// 00000100
// 00000010
// 00000001

let myPermision = 0;
myPermision = myPermision | readPermission | writePermission;

console.log(myPermision);

let message = myPermision & readPermission ? "yes" : "no";

console.log("read permision: " + message);

// 00000111 - all permissions
// 00000100

// 00000100
