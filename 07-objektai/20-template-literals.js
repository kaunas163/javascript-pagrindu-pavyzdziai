// Template Literals

const message1 = 'This is my\n'
    + '\'first\' message';
console.log(message1);

// Object literals {}
// Boolean literals true, false
// String literals '', ""
// from ES6: Template literals ``

const message2 = `This is my
'first' message`;
console.log(message2);

let name = 'Tom';

const message3 =
`Hi ${name},

Thank you for joining my mailing list.

${2 + 3}

Regards,
Ieva.`;

console.log(message3);
