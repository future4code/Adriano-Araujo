/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO*/

//1
//A função irá à partir do "input" da const cotação(que pede a cotação do dolar),
// multiplicar o valor inserido pelo valor seguinte, determinado como valorEmDolar. 
//No caso em si, ele irá imprimir no console o valor da cotação do dolar multiplicado por 100;

//2
// A função, de acordo com cada opção do parametro tipoDeInvestimento está definindo o valor a ser multiplicado, caso a caso.
//Fora da função, são declaradas duas variáveis, 
//uma que chama a função com a opção "ações" e um valor de 150, tendo seu valor impresso no console como 165(150 x 1.1)  
 //e outra que chama a função com a opção "tesouro direto" e um valor de 200,
//e terá impresso no console: TIPO  DE INVESTIMENTO INFORMADO INCORRETO!

//3
// O "for" pega todos os valores pares e insere ao array1, em todo outro caso, ele é adcionado ao array2.
// Nos consoles serão impressoes respectivamente:
// "Quantidade total de números 14"
// 6
// 8

//4
// Se o "numero" for menor do que o "numero1" o valor de "numero1" será igual ao valor de "numero", no caso do array(o "numeros")
// esse valor será igual ao -10(o menor numero do array)
// Agora, se o "numero" for maior do que o "numero2", o "numero2" será igual ao "numero",  no caso do array(o "numeros"),
 //esse valor será igual a 1590(o maior numero do array)


/*
LÓGICA DE PROGRAMAÇÃO ///////////////////////////////////////////
*/ 

//1
// Com for, for of, e forEach

// array a ser precorrido
let array = [2, 4, 6, 8, 9, 10, 11, 14, 18]

let index = 0 // programa que o percorre
 for (index; index < array.length; index++) {
    console.log(array[index])
 }

 //2
 // a. false
 // b. false
 // c. true
 // d. true
 // e. true

 //3
 // Não o código não funciona, ele imprimirá infinitos zeros(i*2, sendo i=0), acho que a melhor forma seria usar
 // o "for" ao inves do "while", e um "<" menor quê, do que um "<=" menor ou igual a quê
 const quantidadeNumerosPares = 8
 let i = 0
 for(i; i < quantidadeNumerosPares; i++) {
     console.log(i*2)
 }
 
 //4
 const tipoTriangulo = (a,b,c) =>{
   if(a == b && b == c){
     console.log("equilátero")
   }else if(a !==b && b !== c && c !== a){
     console.log("escaleno")
   }else{
     console.log("isósceles")
   }
  
  }

// 5

// Variavéis com o textos e valores para função
const textoMaior = "O maior é:"
const iguais = "Ambos os números são iguais"
const divisivel = "é divisível por"
const naoDivisivel = "não é divisível por"
const diferenca = "A  diferença entre eles é "

let subtracao
//função
const matematica = (num1, num2) => {
  if (num1 > num2) {
    console.log(textoMaior, num1)
    subtracao = num1 - num2
  } else if (num1 < num2) {
    console.log(textoMaior, num2)
    subtracao = num2 - num1
  } else {
    console.log(iguais)
  }

  if (num1 % num2 == 0) {
    console.log(num2, naoDivisivel, num1
      + '\n' +
      num1, divisivel, num2)
  } else if (num2 % num1 == 0) {
    console.log(num1, naoDivisivel, num2
      + '\n' +
      num2, divisivel, num1)
  } else if (num1 % num2 !== 0) {
    console.log(num1, naoDivisivel, num2)
  } else if (num2 % num1 !== 0) {
    console.log(num2, naoDivisivel, num1)
  }

  console.log(diferenca, subtracao)

}

