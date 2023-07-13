// EJERCICIO 1
console.log("EJERCICIO 1");
let numero = 3 
numero %=2
if (numero = 1) {
    console.log("Soy Impar");
} else {
    console.log("Soy par");
}

//EJERCICIO 2
console.log("EJERCICIO 2");
let num1 = 12
let num2 = 13

if (num1>num2) {
    console.log(num1 + " Es mayor a " + num2);
} else if (num1<num2) {
    console.log(num2 + " Es mayor a " + num1);
} else {
    console.log("Son iguales");
}
//EJERCICIO 3
console.log("EJERCICIO 3");
let numMult = 25

if (numMult % 5 == 0) {
    console.log(`${numMult} Es multiplo de 5`);
} else {
    console.log(`${numMult} No es multiplo de 5`);
} 

// EJERCICIO 4
console.log("EJERCICIO 4");
let numeroFinal = 5

for (let i= 0 ; i <= numeroFinal; i++){
console.log(i);
}
// EJERCICIO 5
console.log("EJERCICIO 5");

let numeroSelecc = 5
let palabraSelecc = `Pirulín repetido ${numeroSelecc} veces`

for (let i = 1; i <= numeroSelecc; i++){
    console.log(palabraSelecc);
}

// EJERCICIO 6
console.log("EJERCICIO 6");

let variableArray = 2+6
let array = [
    "Facundo",
    21,
    true,
    variableArray,
]

console.log(array);

// EJERCICIO 7

console.log("EJERCICIO 7");

let array10 = [
    2,
    3,
    1,
    12,
    45,
    85,
    32,
    778,
    151,
    5,
]
for (let i= 0; i < array10.length; i++) {
    if (i==4) {
        continue
    }
    console.log(`Sub-indice ${i} , numero `+ array10[i]);
}

// EJERCICIO 8

console.log("EJEERCICIO 8");

let arrayNums = [
    2,
    3,
    4,
    5,
    6,
    7,
]

let multiplicador = 2

for (let numero = 0; numero < arrayNums.length; numero++){
    console.log(`${arrayNums[numero]} multiplicado por ${multiplicador} es `+arrayNums[numero]*multiplicador);
}

