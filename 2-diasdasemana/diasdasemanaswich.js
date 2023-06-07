let diasemana = 10
let dia = ""
switch (diasemana) {
    case 0:
        dia = "segunda-feira"
        break
    case 1:
        dia = "terça-feira"
    break
    case 2:
        dia = "quarta-feira"
        break
    case 3:
        dia = "quinta-feira"
        break
    case 4: 
        dia = "sexta-feira"
        break
    case 5:
        dia = "sabado"
        break
    case 6:
        dia = "domingo"
        break
    default:
        dia = " $%^ERROR:dia invalido"
}
    console.log(`hoje e:${dia}`)

 

