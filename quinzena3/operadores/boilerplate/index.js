/* 

a. false
b.false
c. true
d. boolean

*/

/*

a. undefined
b. null
c. 11
d. 3
e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

/*
1
*/

let age = prompt("Olá! qual a sua idade? ");
let ageFriend = prompt("E você Maycon, qual a sua idade? ");

age = Number(age);
ageFriend = Number(ageFriend);

const message = "Sua idade é maior do que a do seu melhor amigo?";
const ageDifference = age - ageFriend;

console.log(message, true);
console.log(ageDifference);

// 2.

let numberUser = prompt("Digite um número par");
const rest = numberUser % 2;

console.log(rest); // Números pares sempre retornam restos de valor igual a 0
// Números ímpares sempre retornam restos de valor igual a 1

/*
3
*/

let array = [];
let listaDeTarefas = array;

console.log("Digita 3 tarefas para hoje");
let userTask1 = listaDeTarefas.push(prompt("Tarefa 1 "));
let userTask2 = listaDeTarefas.push(prompt("Tarefa 2 "));
let userTask3 = listaDeTarefas.push(prompt("Tarefa 3 "));

console.log(listaDeTarefas);

console.log(
  "Digita agora uma das tarefas que tu realizou começando no zero, assim: 0=1,1=2, 2=3 "
);

let userRemove = listaDeTarefas.splice(prompt("Realizou a tarefa "), 1);

console.log(listaDeTarefas);

/*
4
*/

const nameUser = prompt("Digite seu nome para o cadastro ");
const mailUser = prompt("Agora só digitar o email e pronto! Sucesso total ");

console.log(
  "O e-mail",
  mailUser,
  "foi cadastrado com sucesso. Seja bem-vinda(o),",
  nameUser,
  "!"
);

/*
EXTRAS
*/

/*
1
*/

let fahrenheit = 77;
let celcius = 80;

let grausFahrenheit = (celcius * 9) / 5 + 32;
let grausKelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;

/*a*/ console.log(fahrenheit, "°F", " Convertido para K é ", grausKelvin);
/*b*/ console.log(celcius, "°C", " Convertido para °F é ", grausFahrenheit);

celcius = 30;
grausFahrenheit = (celcius * 9) / 5 + 32;
grausKelvin = ((grausFahrenheit - 32) * 5) / 9 + 273.15;

/*c*/ console.log(
  celcius,
  "°C",
  "Convertido para °F e K equivale respectivamente a ",
  grausFahrenheit,
  " e ",
  grausKelvin
);

celcius = prompt(
  "Tente você também, digite um número para convertermos em °F e K "
);
grausFahrenheit = (celcius * 9) / 5 + 32;
grausKelvin = ((grausFahrenheit - 32) * 5) / 9 + 273.15;
/*d*/ console.log(
  celcius,
  "°C",
  "Convertido para °F e K equivale respectivamente a ",
  grausFahrenheit,
  " e ",
  grausKelvin
);

/*
2
*/

const horaQuilowatt = 0.05;

let consumoCasa = 280;

let desconto = 0.15;

let pagamentoConsumoCasa = consumoCasa * horaQuilowatt;

console.log("R$", pagamentoConsumoCasa);
console.log("R$", pagamentoConsumoCasa * desconto);

/*
3
*/

//a
const libraEquivaleQuilo = 0.453;

let valorLibra = 20;
let converteLibraEmQuilo = valorLibra * libraEquivaleQuilo;

console.log(valorLibra, "lb equivalem a ", converteLibraEmQuilo, "kg");

//b
const oncaEquivaleQuilo = 0.283;

let valorOnca = 10.5;
let converteOncaEmQuilo = valorOnca * oncaEquivaleQuilo;

console.log(valorOnca, "oz equivalem a ", converteOncaEmQuilo, "kg");

//c

const milhaEquivaleEmMetro = 1609.34;

let valorMilha = 100;
let converteMilhaEmMetro = valorMilha * milhaEquivaleEmMetro;

console.log(valorMilha, "mi equivalem em", converteMilhaEmMetro, "m");

//d
const peEquivaleEmMetro = 0.3048;

let valorPe = 50;
let convertePeEmMetro = valorPe * peEquivaleEmMetro;

console.log(valorPe, "ft equivalem em", convertePeEmMetro, "m");

//e
const galaoEquivaleEmLitro = 3.785;

let valorGalao = 103.56;
let converteGalaoEmLitro = valorGalao * galaoEquivaleEmLitro;

console.log(valorGalao, "gal equivalem a", converteGalaoEmLitro, "l");

//f

const xicaraEquivaleEmLitro = 0.84131;

let valorXicara = 450;
let converteXicaraEmLitro = valorXicara * xicaraEquivaleEmLitro;

console.log(valorXicara, "xic equivalem a", converteXicaraEmLitro, "l");

//g

let valorQuilo = prompt(
  "E você? Que tal convertermos um kg em onça?Curioso? Digite um valor "
);

let converteQuiloEmOnca = valorQuilo / oncaEquivaleQuilo;
console.log(valorQuilo, "kg equivalem a ", converteQuiloEmOnca, "oz \n:-o");
