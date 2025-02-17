console.log("A arma possui 8 cartuxos para balas.\nVoce jogara contra a maquina...")
console.log("voce ira comecar")
console.log("Round 1(1/8) - Sua vez")
let round = 1
let morto = false
while(!morto){
    let buracoBala = Math.floor(Math.random() * (9 - round)) + 1;
    console.log("Cartuxo com a Bala ", buracoBala)
    let balasorteada = Math.floor(Math.random() * (9 - round)) + 1;
    console.log("Cartuxo disparado ", balasorteada)
    if(balasorteada == buracoBala){
        console.log("︻╦̵̵̿╤─ ҉ - - - - - - -")
        round % 2 === 0 ? console.log("Parabens, vc ganhou a Maquina morreu") : console.log("Perdeu, vc foi morto")
        morto = true
    }else{
        console.log("Arma nao foi disparada")
        round++
        round % 2 === 0 ? console.log(`Round ${round}(${round}/8) - Vez Maquina`) : console.log(`Round ${round}(${round}/8) - Sua vez`)
    }
}