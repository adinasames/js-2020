
// daca pui multiply(a), functia se face cu a de la multiply, nu de la var(iti face variabila locala)
var a = 10

function multiply(a) {
    // a este variabila locala
    a *= 2
    console.log(a)
}


function multiply2(b) {
    // a este variabila globala
    a *= 3
    console.log(a)
}

function multiply3(x) {
    // a este locala
    // (let creaza o variabila locala)
    var a = 50
    a *= 4
    console.log(a)
}

function definevars(x) {
    // defineste 2 variabile locale
    var c = 123
    let d = 321
}


do {
    // let "e" este o variabila locala, este definita doar in bucla
    // var creeaza o variabila globala atunci cand este folosit in bucla
    let e = 10
    var f = 33
} while (false);

console.log(f)

// eroare daca se ruleaza: (vezi comment mai sus)
// console.log(e)


// aceeasi poveste ca la bucla - const functioneaza ca un let
if (true) {
    // g = local
    let g = 77
    // h = global
    var h = 99
}


// console.log(g)
console.log(h)

multiply(1)
multiply2(1)
multiply3(1)
definevars()

// cele 2 variabile nu sunt vizibile (sunt difinite in functie, nu globale)
// console.log(c)
// console.log(d)

console.log(a)