/*
EXERCICIO 1

Enquanto o valor de i é menor do que 5 o for está adcionando mais 1,
 esse valor está sendo adcionado a variável valor e sendo impressa no console.
  O resultado deve ser 5;

EXERCICIO 2

a. Os números maiores que 18;
b. Sim, eu tentaria algo assim:

     for (let numero of lista) {
  if (numero > 0) {
		console.log(array.indexOf(numero))
	}
}
          
  
DESAFIO 1
Acho que imprimiria algo assim(mas acho que talvez ele imprimisse algo mais que não entendi)
0
00
000
0000



*/

/*
EXERCICIO 3
*/

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

//a.

for (i = 0; i < 13; i++) {
  console.log(array[i]);
}

//b.

for (i = 0; i <= 12; i++) {
  console.log(array[i] / 10);
}

//c.

for (i = 0; i <= 12; i++) {
  let par = array[i] % 2;
  if (par === 0) {
    console.log(array[i]);
  }
}

//d.

for (let number of array) {
  if (number > 0) {
    index = array.indexOf(number);
    console.log("O elemento do ", index, "é", number);
  }
}

// DESAFIO 2

let firstPlayer = Number(prompt("Digite um número! "));
console.log("Vamos jogar! ");

let secondPlayer;
let array = [];
let vezes = 0;

while (secondPlayer !== firstPlayer) {
  secondPlayer = Number(prompt("Chute um número "));

  vezes = array.push(secondPlayer);

  console.log("O número chutado foi: ", secondPlayer);

  if (secondPlayer > firstPlayer) {
    console.log("Errrrrrrrou, é menor");
  } else if (secondPlayer < firstPlayer) {
    console.log("Errrrrrrrou, é maior");
  }
}

console.log("O numero de tentativas foi: ", array.length);

// DESAFIO 3

let firstPlayer = Number(prompt("Digite um número! "));
console.log("Vamos jogar! ");

let secondPlayer;
let array = [];
let vezes = 0;

while (secondPlayer !== firstPlayer) {
  secondPlayer = Number(prompt("Chute um número "));

  vezes = array.push(secondPlayer);

  console.log("O número chutado foi: ", secondPlayer);

  if (secondPlayer > firstPlayer) {
    console.log("Errrrrrrrou, é menor");
  } else if (secondPlayer < firstPlayer) {
    console.log("Errrrrrrrou, é maior");
  }
}

console.log("O numero de tentativas foi: ", array.length);

//DESAFIO 4

let numbersForRandom = parseFloat(Math.random() * 100);
let random = parseInt(numbersForRandom);

let firstPlayer = random;

console.log("Vamos jogar! ");

let secondPlayer;
let array = [];
let vezes = 0;

while (secondPlayer !== firstPlayer) {
  secondPlayer = Number(prompt("Chute um número "));

  vezes = array.push(secondPlayer);

  console.log("O número chutado foi: ", secondPlayer);

  if (secondPlayer > firstPlayer) {
    console.log("Errrrrrrrou, é menor");
  } else if (secondPlayer < firstPlayer) {
    console.log("Errrrrrrrou, é maior");
  }
}

console.log("O numero de tentativas foi: ", array.length);

//A dificuldade nesse último desafio não foi criar um metodo de números aleátorios em si.
//O desafio para mim foi a criação do desafio 3,
//o desafio 4 foi mais "fácil" com os links auxiliares.
