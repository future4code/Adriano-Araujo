console.log("Bem vindo ao jogo de Blackjack!"); // Mensagem inicial



//Chamando a função comprar carta
const userCardOne = comprarCarta(); 
const userCardTwo = comprarCarta();

let userCard = {//Armazenando os valores de texto do usuário
  cardUser1: userCardOne.texto,
  cardUser2: userCardTwo.texto,
  cardValue1: userCardOne.valor,
  cardValue2: userCardTwo.valor,
};
//Chamando a função comprar carta
const userMachineOne = comprarCarta();
const userMachineTwo = comprarCarta();

let computerCard = {//Armazenando os valores de texto do computador
  cardComputer1: userMachineOne.texto,
  cardComputer2: userMachineTwo.texto,
  cardValueMachine1: userMachineOne.valor,
  cardValueMachine2: userMachineTwo.valor,
};

let plusUserCards = userCard.cardUser1 + " " + userCard.cardUser2;
let plusUserValues = userCard.cardValue1 + userCard.cardValue2;

let plusComputerCards =
  computerCard.cardComputer1 + " " + computerCard.cardComputer2;
let plusComputerValues =
  computerCard.cardValueMachine1 + computerCard.cardValueMachine2;

  

function start() { //Aqui a função play é chamada quando o usuário concorda em jogar
  if (confirm("Quer iniciar uma nova rodada?")) {
    play();
  } else {
    console.log("O jogo acabou");
  }
}

start(); //Aqui está a impressão do jogo no console

function play() {
  console.log(
    "\n",
    "Usuário - cartas:",
    plusUserCards,
    "- pontuação",
    plusUserValues,
    "\n",
    "Computador - cartas:",
    plusComputerCards,
    "- pontuação ",
    plusComputerValues
  );

  if (plusUserValues > plusComputerValues) {
    console.log("O usuário ganhou! :) ");
  } else if (plusUserValues < plusComputerValues) {
    console.log("O computador ganhou!:( ");
  }else{
    console.log("empate");
  }
}


