let arr = [1, 2, 3, 4, 5]
console.log(arr)

// reverse
arr.reverse()
console.log(arr)

// reduce
let reduce = arr.reduce(function(acumulador, atual){
    return acumulador + atual
})
console.log(reduce)


const nomes = ['teixereca', 'josiane', 'junisse', 'heitor']
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else{
        nomes[primeiraLetra] = 1
    }
    return nomes

}, {})

console.log(nomesPorOrdem)