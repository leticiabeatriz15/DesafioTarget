let dados = [
    {estado: 'SP', valor: 67836.43},
    {estado: 'RJ', valor: 36678.66},
    {estado: 'MG', valor: 29229.88},
    {estado: 'ES', valor: 27165.48},
    {estado: 'Outros', valor: 19849.53}]

let soma = 0
for(let dado in dados){
    soma += dados[dado].valor
}
let percentual
for(let i in dados){
    percentual = (dados[i].valor/soma)*100
    console.log(`O faturamento percetual de ${dados[i].estado} foi ${percentual.toFixed(2)}%`)
}
