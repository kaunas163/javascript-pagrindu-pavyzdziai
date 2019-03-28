const first = [1, 2, 3];
const second = [4, 5, 6];

console.log(first);
console.log(second);

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4);
console.log(slice);

const sliceToTheEnd = combined.slice(3);
console.log(sliceToTheEnd);

const copied = combined.slice();
console.log(copied);

const referenced = [{ id: 1 }];
const refCopied = referenced.concat(second);
const refSliced = referenced.slice();
referenced[0].id = 10;

console.log(referenced);
console.log(refCopied);
console.log(refSliced);
