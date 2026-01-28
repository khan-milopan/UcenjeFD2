// varijabla je prostor u memoriji
// može biti različitih tipova podataka
// u JS ES6 postoji tri načina definiranja varijabli

const ime = 'Khan'; // prompt('Unesi svoje ime: ');

console.log (typeof ime, ime);

console.log (`Dobar dan ${ime}!`);

const unosGodina = '2026';

const godina = Number(unosGodina);

console.log (typeof godina, godina+1)
console.log (typeof unosGodina, unosGodina+1)

const cijeliBroj = parseInt('7');
console.log (typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3.14');
console.log (typeof decimalniBroj, decimalniBroj);

// logička vrijednost

const logickaVrijednost = true;
console.log (typeof logickaVrijednost, logickaVrijednost);

// const se ne može mijenjati --> logickaVrijednost = false;
// a ni ponovno deklarirati --> const logickaVrijednost = false;

let broj = 7;
console.log (typeof broj, broj);
broj = 8;
console.log (typeof broj, broj);
broj = '7';
console.log (typeof broj, broj);

// let se ne može ponovno deklarirati --> let broj = 9;

// STARO, ne koristiti - što ne znači da ne postoji
var x = 8;
console.log (typeof x, x);
x='8';
console.log (typeof x, x);
var x = true; // može se redeklarirati
console.log (typeof x, x);


const velikiBroj = 37217835123561279361278341278341n;
console.log(typeof velikiBroj, velikiBroj);

// ne mogu deklarirati konstantu bez vrijednosti
// const i;

let iTakoNesto;
console.log (typeof iTakoNesto, iTakoNesto);
iTakoNesto = 7;
console.log (typeof iTakoNesto, iTakoNesto);

let o = 0;
console.log (typeof o, o);
o = 8;
console.log (typeof o, o);

// JSON - JavaScript Object Notation

o = {
    id: 1001,
    ime: 'Pero',
    prezime: 'Perić',
    znaProgramirati: false,
};
console.log (typeof o, o);
console.table (o);

let niz = [2,3,1,8,4,3];
console.log (typeof niz, niz);
console.table (niz);

const backend = [
    {  
        id: 1,
        ime: 'Marina',
        prezime: 'Generacija',
        znaProgramirati: true
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Perić',
        znaProgramirati: false
    },
    {
        id: 3,
        ime: 'Maja',
        prezime: 'Katić',
        znaProgramirati: false
    }
];

console.log (typeof backend, backend);
console.table (backend);

// tijelo funkcije
function pozdrav(){
    console.log('Pozdrav 1');
};

console.log (typeof pozdrav, pozdrav);
pozdrav();

const pozdravi = () => console.log('Pozdrav 2');
console.log (typeof pozdravi, pozdravi);
pozdravi();

const kompleksnije = (x,y) => {
    x = x + 3; // x = 5
    y = --y + x; // y = 6
    return x+y;
};

kompleksnije(2,2);
console.log (kompleksnije(2,2));

const id1 = Symbol('edunova'); // edunova je opis, ali je vrijednost jedinstvena i mu je znamo
const id2 = Symbol('edunova'); 

console.log (typeof id1, typeof id2, id1, id2);

// operator uspoređivanja
// ==   -> provjerava samo po vrijednosti '2' je isto što i 2
// ===  -> provjerava po tipu i po vrijednosti tako da '2' nije isto što i 2

console.log (id1 == id2);
console.log (id1 === id2);

console.log ('2' == 2);
console.log ('2' === 2);
console.log (2 === 2);