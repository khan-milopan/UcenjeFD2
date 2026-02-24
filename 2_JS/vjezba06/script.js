const prazanNiz = [];
console.log (prazanNiz);

const temperature = [-2,2,10,15,21,26,28,31,28,19,10,4];
console.log (temperature);
console.log (temperature.length);
console.table (temperature);
console.log (temperature[0]);

const zadnji = temperature.length-1;

console.log (temperature[zadnji]);
console.log (temperature[temperature.length-1]);

temperature[0] = -1;
console.table(temperature);

const ptp = [
    10, //number
    "Osijek", //string
    true, //boolean
    Symbol('id'), //jedinstvena vrijednost
    undefined, //nedefinirano
    null, //objekt nema vrijednost
    [], //array / niz
    {ime: 'Edunova'}, //objekt
    18n //bigint
];

console.table (ptp);

const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log (tablica[2][0]);

tablica[1][2] = 11;

console.table(tablica);
