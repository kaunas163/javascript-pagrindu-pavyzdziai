let trafficLight = 'red';

switch (trafficLight) {
    case 'green':
        console.log('galite vaziuoti');
        break;
    case 'yellow':
        console.log('galite vaziuoti tik jeigu nespesite sustoti');
        console.log('kitu atveju ruoskites sustoti');
        break;
    case 'red':
        console.log('vaziuoti negalima');
        break;
    default:
        console.log('sviesoforas nerastas');
}
