// switch statement

/*switch (variable) {
    case value1:
        statement;
        break;
    case value2:
        statement;
        break;
    default:
        statement;
}*/

let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}

// same as:

if (role === 'guest') {
    console.log('Guest user');
}
else if (role === 'moderator') {
    console.log('Moderator user');
}
else {
    console.log('Unknown user');
}
