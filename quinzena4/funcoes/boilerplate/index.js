/*
EXERCÍCIO 1
*/

// a.5 e 50
// b.Só seria retornado o valor da ultima função chamada porque nós não estaríamos pedindo que elas fossem impressas no console.

/*
EXERCÍCIO 2
*/

//a. Seriam impressos os valores do indice menores do que 2, no caso:
//Darvas
// Goli
//b. Amanda e Caio seriam impressos porque eles estariam em posições no indice menores do que 2

/*
EXERCÍCIO 3
*/
// Se o valor dentro do array é par a função multiplicará o valor por ele mesmo.Eu daria o nome de: multipliqueParesPorSi

/*
EXERCÍCIO 4
*/

//a.
function phrase() {
  console.log(
    "Eu sou Adriano, tenho 31 anos, moro no Rio de Janeiro e sou estudante."
  );
}
phrase();

//b.
const data = (nome, idade, cidade, beOrNotBe) => {
  if (beOrNotBe == true) {
    beOrNotBe = "sou";
  } else {
    beOrNotBe = "não sou ";
  }
  let phrase = `Eu sou ${nome}, tenho ${idade},moro na cidade ${cidade} e ${beOrNotBe} estudante`;
  return phrase;
};

let name = "Adriano";
let idade = 31;
let cidade = "RJ";
beOrNotBe = false;

const extenso = data("Adriano", 31, "Rj", beOrNotBe);
console.log(extenso);

/*
EXERCÍCIO 5
*/

//a.
const somatorio = (numero1, numero2) => {
  return numero1 + numero2;
};
let soma = somatorio(
  Number(prompt("Digite um numero")),
  Number(prompt("Digite outro"))
);

console.log(`A soma dos dois é ${soma}`);

//b.

function comparacao(numero1, numero2) {
  let compara;
  if (numero1 > numero2) {
    compara = "o primeiro é numero é maior";
  } else {
    compara = "o primeiro número é menor";
  }
  return compara;
}

let maiorOuMenor = comparacao(
  Number(prompt("Digite um numero")),
  Number(prompt("Digite outro"))
);
console.log(maiorOuMenor);

//c.
let i = 0;
const imprima = (labenu) => {
  while (i < 10) {
    console.log(labenu);
    i++;
  }
};

let imprimir = imprima("topzeira!");
console.log(imprimir);

/*
EXERCÍCIO 6
*/
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//a.

const size = (array) => {
  return array.length;
};
const sizeOutput = size(array);
console.log(sizeOutput);

//b.

function parOuNao(user) {
  let numero = user % 2;
  if (numero == 0) {
    numero = true;
  } else {
    numero = false;
  }
  return numero;
}

let resultado = parOuNao(prompt("Digite um numero "));

console.log(`É par? ${resultado}`);

//c.
const arrayPar = (array) => {
  let arrayPar = [];
  for (let x of array) {
    if (x % 2 === 0) {
      arrayPar.push(x);
    }
  }
  let extensao = arrayPar.length;
  return extensao;
};

let numerosPares = arrayPar(array);
console.log(numerosPares);

//d.

// ***função b
function parOuNao(user) {
  let numero = user % 2;
  if (numero == 0) {
    numero = true;
  } else {
    numero = false;
  }
  return numero;
}

// ***função c alterada
const arrayPar = (array) => {
  let arrayPar = [];

  let index;
  let resultado;
  for (index = 0; index < array.length; index++) {
    resultado = parOuNao(array[index]);
    if (resultado === true) {
      arrayPar.push(index);
    }
  }
  let extensao = arrayPar.length;
  return extensao;
};

let numerosPares = arrayPar(array);
console.log(numerosPares);


/*
DESAFIOS //////////
*/

//EXERCÍCIO 1

const arrowFunction = (soma)=>{ //function 1
 return soma

}

 const somar = (a,b) =>{ //function 2
  console.log(a+b)
}

let valor = somar(2,3)
arrowFunction(valor)

//EXERCÍCIO 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]


//a. 

const paresMultiplicados = (array) => {
  let arrayPar = [];

  for (let alpha of numeros) {
		if (alpha % 2 === 0) {
	    arrayPar.push(alpha * 2)
		}
  }

  return arrayPar;
}

paresMultiplicados()


//b.

const max = (array) => {

    let maior = array[0]

    for (let i = 1; i < array.length; i++){
        if (array[i] > maior) {
            maior = array[i];
        }
    } 
    return maior;
}

max(numeros)

//c

const maxIndex = (array) => {

    let maior = array[0]
    let indexMaior

    for (let i = 1; i < array.length; i++){

        if (array[i] > maior) {
            maior = array[i]
        }
    } 
    indexMaior = array.indexOf(maior)
    return indexMaior;
}

maxIndex(numeros)
