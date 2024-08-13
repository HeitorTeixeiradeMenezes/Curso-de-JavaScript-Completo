let str1 = "Minha String Bacaninha"
console.log(str1.replace(/i/g, "o"))
console.log("--------------------------")

console.log(str1.lastIndexOf("i"))
console.log(str1.indexOf("String"))
console.log(str1.indexOf("String") >= 0) //faz a funcao do includes
console.log(str1.includes("string")) 
console.log("--------------------------")

console.log(str1.slice(2, 7))
console.log(str1.substring(2, 7))
console.log(str1.slice(-6, -3)) // aceita valores negativos
console.log(str1.substring(-2))
console.log("--------------------------")

console.log(str1.toLocaleLowerCase())
console.log(str1.toUpperCase())
console.log("--------------------------")

let str2 = "      " + str1 + "        "
console.log(str2)
console.log(str2.trim())
console.log(str2.trimEnd())
console.log(str2.trimStart())
console.log("--------------------------")

let str3 = "0123456789"
console.log(str3.padStart(20))
console.log(str3.padEnd(20, "*"))


//desafio mascarar numero de telefone
let numeroTel = "99790-5066"
function mascarar(numero){
    const primNum = numero[0]
    numeroMasc = numero.slice(numero.length-2, numero.length)
    numeroMasc = numeroMasc.padStart(numero.length-1, "*")
    numeroMasc = numeroMasc.padStart(numero.length, primNum)
    return numeroMasc
}
console.log(mascarar(numeroTel))
console.log("--------------------------")
// fim desafio


let str4 = "Hoje e Sabado"
console.log(str4.startsWith("Hoje"))
console.log(str4.endsWith("Sabado"))
console.log(str4.startsWith("oje", 1))
console.log(str4.startsWith("hoge"))
console.log("--------------------------")

let str5 = "abcdpqts"
console.log(str5.charAt(0))
console.log(str5.charCodeAt(3))
console.log(str5.charCodeAt(4))

