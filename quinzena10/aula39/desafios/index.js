// DESAFIOS

// 3.A. 

// const {nome}:{tipo}[][] = [[{valores}],[{valores}]] 
//exemplo:
// const multiDimensional:number[][] = [[1,2,3],[4,5,6]] 

// 3.B.
function valoresMatriz(matriz,linha, coluna, valor){

    if(valor === undefined || valor === null || valor === ''){
        console.log('Fora do intervalo da matriz')}
    
   matriz[linha][coluna] = valor
   return matriz

}
    //teste 
   const array = [[1,2,3], [4,5,6]]
   console.log(valoresMatriz(array,0,0,7))

// 4.A
function imprimirMatriz(matriz){

    for(let index=0;index<matriz.length;index++){
      let camadaUm = matriz[index]
      for(let i=0;i<camadaUm.length;i++){
        console.log(camadaUm[i])
      }
    }
  
  } 
   //teste
   const array = [[1,2,3], [4,5,6]]
   console.log(imprimirMatriz(array))


// 4.B
function matrizesSomadas(matrizUm, matrizDois){
  let multiplicacao = []

  for(let index=0;index<matrizUm.length;index++){
    let camadaArrayUm = matrizUm[index]
    let camadaArrayDois = matrizDois[index]

    for(let i=0;i<camadaArrayUm.length;i++){
       multiplicacao.push(camadaArrayUm[i]+camadaArrayDois[i])
    }
  }

    console.log(multiplicacao)

}
  // teste
  const arrayUm = [[1,2,3], [4,5,6]]
  const arrayDois = [[1,2,3], [4,5,6]]
  matrizesSomadas(arrayUm,arrayDois)

// 4.C
function transposicao(matrizUm){
let linha = matrizUm.length
let coluna = matrizUm[0]

console.log(`Matriz = ${linha}x${coluna.length}`)

}
    //teste
    const arrayUm =[
    [1,2],
    [4,5],
    [1,2],
    [1,8]]
    transposicao(arrayUm)

// 4.D
function matrizesMultiplicadas(matrizUm, matrizDois){
  let multiplicacao = []

  for(let index=0;index<matrizUm.length;index++){
    let camadaArrayUm = matrizUm[index]
    let camadaArrayDois = matrizDois[index]

    for(let i=0;i<camadaArrayUm.length;i++){
       multiplicacao.push(camadaArrayUm[i]*camadaArrayDois[i])
    }
  }

    console.log(multiplicacao)

}
   // teste
   const arrayUm = [[1,2,3], [4,5,6]]
   const arrayDois = [[1,2,3], [4,5,6]]
   matrizesMultiplicadas(arrayUm,arrayDois)

// 5
function eNegativo(matrizUm){
  let negativos = []

  for(let index=0;index<matrizUm.length;index++){
    let camadaArrayUm = matrizUm[index]

      for(let i=0;i<camadaArrayUm.length;i++){
       if(camadaArrayUm[i] < 0){
       negativos.push(camadaArrayUm[i])
       }
    }
  }

    console.log(negativos.length)

}
  // teste
  const arrayUm = [
      [-3, -2, -1, 1],
      [-2, 2, 3, 4],
      [4, 5, 7, 8]] 
  eNegativo(arrayUm)