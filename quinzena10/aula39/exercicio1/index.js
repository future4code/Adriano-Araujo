

const oneEdit = (stringA, stringB) => {
    let firstWord = stringA.split('')
    let secondWord = stringB.split('')
    let index = 0
    let answer
    
      if(firstWord.length === secondWord.length-1){
        answer = 'é one edit: remoção de 1'
      }else if(firstWord.length === secondWord.length+1){
        answer = 'é one edit: adição de 1'
    
      }else if(firstWord.length === secondWord.length){
    
        for(index;index<=firstWord.length;index++){
    
          if(firstWord[index] !== secondWord[index]){
            answer = 'é one edit: troca de um caractere'
           }

        }
    
      }else{
        answer = 'não é one edit'
      }
      
    
    return answer
    
    }
    // testes
    console.log(oneEdit('banan','banana'))
    console.log(oneEdit('bananak','banana'))
    console.log(oneEdit('panana','banana'))
    console.log(oneEdit('bananaaa','banana'))