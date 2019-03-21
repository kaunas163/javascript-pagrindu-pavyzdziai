let repeat = false;
let number = 0;

do {
    console.log(number);
    
    if (number === 0) {
        repeat = true;
    }
    
    number++;

    if (number % 3 === 0) {
        repeat = false;
    }
} while (repeat && number < 10);
