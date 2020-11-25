console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");

/*
EXERCÍCIO 1 
  O código ao capturar um número do usuário diz se ele passou ou não no teste, como condição para passar no teste o usuário deve digitar um número par(que tenham seu resto igual a zero), se o usuário digita um número ímpar(com resto igual a um) o output condicionado é "Não pessou no teste.".

EXERCÍCIO 2
  a. Para condicionar cada fruta escolhida pelo cliente a um preço especificado;
  b. R$ 2.25;
  c. o switch continuaria sendo executado até o próximo break, no caso ele imprimirá o preço não como 5.5 mas como 5

EXERCÍCIO 3
  a. Definindo uma variável com valor determinado pelo usuário e convertida para número;
  b. Se digitado o valor 10 a mensagem será:  "Esse número passou no teste". Se digitado o valor -10, o código não executará nada, porque o variável mensagem foi definida dentro do bloco if.
  c. Não sei, mas acho que ele dirá que a variável mensagem NÃO FOI DEFINIDA, porque ela foi determinada em um bloco e não tem escopo global.

*/

/*
EXERCÍCIO 4
*/
let ageUser = Number(prompt("Qual sua idade? "));

if (ageUser >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

/*
EXERCÍCIO 5
*/

let student = prompt(
  "Olá alunos, por favor digitem seus turnos com a letra inicial:\n M para matutino\n V para Vespertino\n N para Noturno. "
);

if (student === "M") {
  console.log("Bom dia!");
} else if (student === "V") {
  console.log("Boa tarde!");
} else if (student === "N") {
  console.log("Boa noite!");
} else {
  console.log("Digite uma das opções acima em capslock ;-)");
}

/*
EXERCÍCIO 6
*/

let student = prompt(
  "Olá alunos, por favor digitem seus turnos com a letra inicial:\n M para matutino\n V para Vespertino\n N para Noturno. "
);

let greeting;

switch (student) {
  case "M":
    greeting = "Bom dia!";
    break;
  case "V":
    greeting = "Boa tarde!";
    break;
  case "N":
    greeting = "Boa noite!";
    break;
  default:
    greeting = "Digite uma das opções acima em capslock ;-)";
    break;
}

console.log(greeting);

/*
EXERCÍCIO 7
*/

let genre = prompt("Qual o gênero de filme vamos assistir o/ ");
let price = Number(prompt("Quanto estão os ingressos @-@ "));

if (genre === "fantasia" && price < 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

/*
DESAFIO 1
*/

let genre = prompt("Qual o gênero de filme vamos assistir o/ ");
let price = Number(prompt("Quanto estão os ingressos @-@ "));

if (genre === "fantasia" && price < 15) {
  let snack = prompt("Alguma coisa para comer? *-* ");
  console.log("Bom filme! e bom apetite com sua/seu ", snack);
} else {
  console.log("Escolha outro filme :(");
}

/*
DESAFIO 2
*/
