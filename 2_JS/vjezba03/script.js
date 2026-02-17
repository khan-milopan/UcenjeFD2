const a=2, b=3;
let rez;
rez = a + b;
console.log (rez);

// modulo operator ( parnost brojeva )
console.log (9 % 2); // 1
console.log (8 % 2); // 0

// operatori dodjele
rez = rez + 2;
console.log (rez); // 7

rez += 2;
console.log (rez); // 9

const x = 2;

rez -= x;
console.log (rez); // 7

rez *= x;
console.log (rez) // 14

rez /= x;
console.log (rez); // 7

rez = rez + 1; // 8
rez += 1; // 9
rez++; // 10  -> Ovako napisati u redu NIJE DOBRO

// increment (++) i decrement (--) imaju dvojaku ulogu, korištenje u ivećavanje/umanjivanje
// koristiti pa uvećati
console.log (rez++); // ispiše 10 i uveća za 11
console.log (rez); // 11

// uvećati pa koristiti
console.log (++rez); // 12

// koristiti pa uvećati
console.log (rez--); // 12

// umanjiti pa koristiti
console.log (--rez); // 10

// znalo biti na razgovorima za posao
let i = 2, j = 1;
i = j++ - 1;
j += --i - ++j;
console.log (i-j);

// operatori uspoređivanja
// == jednako po vrijednosti
// === jednako po vrijednosti i po tipu
console.log (5 == 5); // true
console.log ('5' == 5); // true
console.log (3 == 7); // false
console.log ('Osijek' === 'osijek'); // false
console.log (5 === '5'); // false

// različito !=
console.log (3 != 5); // true

// <, >, <=, >=
const godine = 18;

console.log (godine > 18); // false
console.log (godine >= 18); // true

const i1 = godine>=18;
const i2 = godine>=21;

console.log (i1); // true
console.log (i2); // false
// punoljetan u svim državama
// u JS se ne smije koristit samo jedan &
console.log (i1 && i2);

// logički OR/ILI je ||
console.log (i1 || i2);

console.log (!i1);

// ternarni operator ( ? : )
console.log (godine >= 18 ? 'Punoljetan' : 'Maloljetan');

const skola = 'Edunova';
console.log ('Najbolja škola je' + skola); // NE PREPORUČA
console.log (`Najbolja skola je ${skola}`);
const razred = 4;
console.log ('Idem u ' + razred + '. razred');
console.log (`Idem u ${razred}. razred`);

const niz = [2,2,1,1];
console.log (niz);
const noviNiz = [0, ...niz, 3];
console.log (noviNiz);

const osoba={
    ime: 'Pero',
    prezime: 'Perić'
};

console.table (osoba);

const polaznik = {
    ...osoba,
    edukacija: 'Frontend developer'
};

console.table (polaznik);

const [prvi, drugi] = [1,2];
console.log(prvi);
console.log(drugi);

const {prezime, ...objektBezPrezimena} = polaznik;
console.table (objektBezPrezimena);
console.log (prezime);

let sifta = null;
console.log(sifra ?? 'Sifra nije definirana');

sifra = '753bb36a-5ecb-4bb7-b77a-f25830260557';
console.log (sifra ?? 'Šifra nije definirana');

const korisnik ={
    adresa: {
        grad: 'Osijek',
        ulica: 'Jagerova'
    }
};

console.table (korisnik);
console.log (korisnik.adresa.grad);
console.log (korisnik.adresa.ulica.toUpperCase());
console.log (korisnik?.adresa?.ulica?.toUpperCase());

const n = [2,3];
console.log (typeof n);
console.log (n instanceof Array);

console.log ('prezime' in osoba);
console.log ('prezime' in objektBezPrezimena);

const binarno = 5 | 3; // bitwise (binarni) operator
console.log (binarno);