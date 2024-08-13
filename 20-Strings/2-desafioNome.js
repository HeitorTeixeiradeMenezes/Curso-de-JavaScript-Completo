// O desafio se baseia em 3 formas de receber o nome da Pessoa 
// 1 forma: "Heitor". Retorna "Heitor"
// 2 forma: "Heitor Menezes". Retorna "Menezes, Heitor"
// 3 forma: "Heitor Teixeira Menezes". Retorna "Teixeira Menezes, Heitor"

function formatar(nome){
    if(nome.indexOf(" ") >= 0){
        let indexPrimeiroNome = nome.indexOf(" ")
        let primeiroNome = nome.slice(0, indexPrimeiroNome)
        let sobrenomes = nome.slice(indexPrimeiroNome, nome.length)
        return sobrenomes.trim() + ", " + primeiroNome.trim()
    } else{
        return nome
    }
}
console.log(formatar("Heitor"))
console.log(formatar("Heitor Teixeira"))
console.log(formatar("Heitor Teixeira de Menezes"))