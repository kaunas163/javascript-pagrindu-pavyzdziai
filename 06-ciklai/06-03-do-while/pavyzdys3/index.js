let i = 0;

do {
    i++;
    
    if (i % 2 === 0) {
        continue;
    }

    if (i >= 10) {
        break;
    }

    console.log(i);
} while (true);
