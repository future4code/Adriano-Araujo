/* 
EXERCICIO 1:
            10
            10 5
EXERCICIO 2:
            10 10 10            

*/


// /*
// CÓDIGO 1
// */

let nome;
let idade;
console.log(typeof nome); //O tipo undefined foi impresso porque o valor da variável não foi definido.

nome = prompt("Digite seu nome ");
idade = prompt("Por favor qual a sua idade? ");

console.log(typeof nome);
console.log(typeof idade); //Tanto números quanto letras ao serem recebidas no prompt retornaram valores do tipo string

console.log("Olá ", nome, " você tem ", idade, " anos");

// /*
// CÓDIGO 2
// */

let name = prompt("Qual seu nome ? ");
console.log("Resposta : ", name);

let adress = prompt("Qual seu endereço ? ");
console.log("Resposta : ", adress);

let animal = prompt("Qual seu animal favorito ? ");
console.log("Resposta : ", animal);

let age = prompt("Qual a sua idade? ");
console.log("Resposta : ", age);

let color = prompt("Qual a sua color favorita? ");
console.log("Resposta : ", color);

// /*
// CÓDIGO 3
// */

let favoriteFood = ["macarrão", "pão", "queijo", "chocolate", "pizza"];

console.log(favoriteFood);
//
console.log("Essas são minhas comida preferidas : ");
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);
console.log(favoriteFood[3]);
console.log(favoriteFood[4]);

//

userFood = prompt("E a sua comida favorita qual é? :) ");
favoriteFood.splice(1, 1, userFood);
console.log(favoriteFood);

// /*
// CÓDIGO 4
// */

let questions = ["Sua roupa é azul?", "Gosta de animais?", "Pratica esportes?"];

let answers = [true, true, true];

console.log(questions[0], answers[0]);
console.log(questions[1], answers[1]);
console.log(questions[2], answers[2]);
