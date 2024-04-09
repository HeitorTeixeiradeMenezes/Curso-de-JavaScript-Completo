function sum(){
    let numbers = Array.from(arguments)
    let numbersOnly = numbers.every(function(n){
        return typeof n === "number"
    })
    if(numbersOnly){
    return numbers.reduce(function(final, natual){
        return final + natual
    }, 0)
    }else{
        return "algo de errado aconteceu"
    }
}

function avarage(){
    console.log(arguments)
    console.log(...arguments)
    return sum(...arguments) / arguments.length
}

let aplicar = function(){
    let nomes = document.querySelectorAll("tr")
    let notas = nomes.querySelectorAll("td")
    let i = 0
    while(nomes[i]){
        console.log(nomes[i])
        i++
    }
}
aplicar()
