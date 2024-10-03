const dados = require('./dados.json')

let valorMenor 
for(let i = 0; i < dados.length; i++){
    if(valorMenor == undefined){
        valorMenor = dados[i]
    }
    if(dados[i].valor != 0 && dados[i].valor < valorMenor.valor){
            valorMenor = dados[i]
    }
}
console.log(`O menor valor de faturamento foi ocorrido no dia ${valorMenor.dia} com o valor de ${valorMenor.valor}`)

let valorMaior
for(let i = 0; i < dados.length; i++){
    if(valorMaior == undefined){
        valorMaior = dados[i]
    }
    if(valorMaior.valor < dados[i].valor){
        valorMaior = dados[i]
    }
}
console.log(`O maior valor do faturamento foi ocorrido no dia ${valorMaior.dia} com o valor de ${valorMaior.valor}`)

let soma = 0
let array = []
for(let verificado in dados){
    soma += dados[verificado].valor
    if(dados[verificado].valor != 0){
        array.push(dados[verificado])
    }
}

let media = soma / array.length

let diasSuperioresDaMedia = 0
for(let dias in array){
    if(array[dias].valor > media){
        diasSuperioresDaMedia += 1
    }
}
console.log(`Foram ${diasSuperioresDaMedia} dias que foram faturados a mais que a média mensal de ${media.toFixed(2)}`)