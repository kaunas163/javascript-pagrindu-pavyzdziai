// String primitive
const primitiveMessage = 'hi';

// String object
const objectMessage = new String('hi');

console.log(typeof primitiveMessage);
console.log(typeof objectMessage);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const message2 = 'This is my first message';

console.log(message2.length);
console.log(message2[0]);
console.log(message2[1]);
console.log(message2.includes('my'));
console.log(message2.includes('not'));
console.log(message2.startsWith('This'));
console.log(message2.startsWith('this'));
console.log(message2.endsWith('e'));
console.log(message2.indexOf('my'));
console.log(message2.replace('first', 'second')); // returns new string and doesnt modify original
console.log(message2);
console.log(message2.toUpperCase()); // returns new string
console.log(message2.toLowerCase()); // returns new string

const messageToTrim = '          some text          ';
console.log(messageToTrim);
console.log('.' + messageToTrim.trim() + '.');
console.log('.' + messageToTrim.trimLeft() + '.');
console.log('.' + messageToTrim.trimRight() + '.');

// escape notation
// \0 - the null character
// \' - single quote
// \" - double quote
// \n - new line
// and so on...

const messageWithEscapes = 'This is \'my\n first message';
console.log(messageWithEscapes);

const wordsFromString = message2.split(' ');
console.log(wordsFromString);
