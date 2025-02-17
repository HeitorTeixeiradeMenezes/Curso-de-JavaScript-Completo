let numero = 12000000000000000.123
console.log(numero.toFixed(2)) // Determina o numero de casas decimais
console.log(typeof numero.toFixed(2)) // vira uma string

console.log(numero.toPrecision(3)) // Determina o numero de digitos que vao aparecer
console.log(typeof numero.toPrecision(3)) // Vira uma string

console.log(numero.toExponential())//Transforma em notacao cientifica

let numero2 = 15
console.log(numero2.toString(2))
console.log(typeof numero2.toString(2))
console.log(numero2.toString(16))
console.log(30 .toString(16))

console.log(1500000.45 .toLocaleString())
console.log(1500000.45 .toLocaleString("en-US"))
console.log(1500000.45 .toLocaleString("en-US", {style: "currency", currency: "USD"}))
