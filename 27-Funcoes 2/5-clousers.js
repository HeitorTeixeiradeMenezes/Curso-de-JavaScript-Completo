const teste = (function(){
    let n = 0
    return function testeInterno(){
        let n2 = 0
        console.log("Teste interno chamado " + ++n + " " + ++n2) // consegue lembrar o valor de n
        return "retorno de teste interno " + ++n + " " + ++n2
    }
})()

console.log(teste)
console.log(teste())
console.log(teste())