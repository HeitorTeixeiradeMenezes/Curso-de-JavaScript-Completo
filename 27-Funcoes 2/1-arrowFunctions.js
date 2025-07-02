function teste(str){
    console.log("function expression test", str)
    return "fn expression " + str
}
const t1 = teste("ola")
console.log(t1)

// ArrowFunction

//arrowfunction com return
// const testeArrow = (str) =>{ 
//     console.log("function expression test", str)
//     return "fn arrow " + str
// }
const testeArrow = (str) => "fn arrow " + str //nao precisa de return nesse exemplo

const t2 = testeArrow("ola")
console.log(t2)

// retornar objeto com return
// const testeArrow2 = () =>{
//     console.log("testeArrow chamado")
//     return {
//         foo : "barr",
//     }
// }
const testeArrow2 = () =>({
    foo : "barr",
})

const t3 = testeArrow2()
console.log(t3)