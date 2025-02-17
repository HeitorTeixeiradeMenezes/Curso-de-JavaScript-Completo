console.log(isFinite(2))
console.log(`${Number.MAX_VALUE}\n${Number.MIN_VALUE}`)

let numeroString = "3.983";
console.log(isNaN(numeroString));
console.log(numeroString, typeof numeroString, parseFloat(numeroString))

let numeroString2 = "3.983a";
console.log(isNaN(numeroString2));
console.log(numeroString2, typeof numeroString2, parseFloat(numeroString2))

let numeroString3 = "a3.983";
console.log(isNaN(numeroString3));
console.log(numeroString3, typeof numeroString3, parseFloat(numeroString3))