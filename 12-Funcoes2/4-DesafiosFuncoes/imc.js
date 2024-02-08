function imc(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error("1 ou mais valores nao definidos")
    }
    altura *= altura
    let final = peso / altura
    if(final < 16.9 ){
        console.log("Muito abaixo do peso")
    } else if(final < 18.4){
        console.log("Abaixo do peso")
    } else if(final < 25){
        console.log("Peso normal")
    } else if(final < 30){
        console.log("Acima do peso")
    } else if(final < 35){
        console.log("Obesidade grau I")
    } else if(final < 40){
        console.log("Obesidade grau II")
    } else if(final > 40){
        console.log("Obesidade grau III")
    }
    return final
}

console.log(imc(76, 1.80))