
function randomnumber(max) {
    return parseInt(Math.random() * max);
}

let arr = [];
while (arr.length < 20) {
    let numero = randomnumber(20);
    if (arr.indexOf(numero) < 0) {
        arr.push(numero);
    }
}

console.log(arr);
