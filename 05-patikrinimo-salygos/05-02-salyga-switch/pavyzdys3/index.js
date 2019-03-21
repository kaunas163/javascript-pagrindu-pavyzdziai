let orderStatus = 'processing';

switch (orderStatus) {
    case 'new':
        console.log('uzsakymas sukurtas, tuoj bus apdorotas');
        break;
    case 'confirmed':
        console.log('uzsakymas patvirtintas');
        break;
    case 'processing':
        console.log('uzsakymas apdorotas ir perduotas kurjeriui');
        console.log('su jumis greitu metu bus susisekta');
        console.log('galesite pasirinkti jums patogiausia atsiemimo laika');
        break;
    case 'done':
        console.log('uzsakymas ivykdytas');
        break;
    default:
        console.log('kazkas negerai');
}

