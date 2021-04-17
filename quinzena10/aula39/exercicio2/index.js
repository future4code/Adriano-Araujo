// Resultado mais próximo do enunciado que consegui sem olhar o gabarito

function cadaLetra(palavra) {
  let letra
  let contador = {}
  for (let index = 0; index < palavra.length; index++) {
    letra = palavra[index]

    if (contador[letra] > 0) {
      contador[letra]++
    } else {
      contador[letra] = 1
    }
  }
  console.log(palavra)
  return contador
}

//teste
console.log(cadaLetra('aabcccccaaa'))


