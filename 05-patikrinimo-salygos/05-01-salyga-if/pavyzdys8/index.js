// If hour is between 6:00 and 12:00: Good morning.
// If it is between 12:00 and 18:00: Good afternoon.
// Otherwise: Good evening.

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning.');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon.');
}
else {
    console.log("Good evening.");
}
