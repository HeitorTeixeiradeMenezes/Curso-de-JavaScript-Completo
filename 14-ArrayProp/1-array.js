let arr = [1, 5, 10, "ola", true]
// every
let somenteNumerosEvery = arr.every(function(elementoArr){
    return typeof elementoArr === "number"
})
console.log(somenteNumerosEvery)

// some
let somenteNumerosSome = arr.some(function(elementoArr){
    return typeof elementoArr === "number"
})
console.log(somenteNumerosSome)

// filter
let somenteNumerosFilter = arr.filter(function(numeroDoArray, indice, arrayCompleto){
    return typeof numeroDoArray === "number"
})
console.log(somenteNumerosFilter)

//forEach
arr.forEach(function(arrdado, i, arrayCompleto){
    if(typeof arrdado === "number"){
        const conta = arrdado * i
        console.log(conta + 2)
    }
})

//map
let numerosXnumeros = somenteNumerosFilter.map(function(numeroDoArray){
    return numeroDoArray * numeroDoArray
})
console.log(numerosXnumeros)