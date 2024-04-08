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

console.log(sum(1, 2, 3, 4))
console.log(avarage(1, 2, 3, 4))