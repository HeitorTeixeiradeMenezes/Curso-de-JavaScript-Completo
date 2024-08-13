let x = 10
let y = [10]
function mudaX(x){
    x++
    console.log("x interno", x)
}

mudaX(x)
console.log("x externo", x)


function mudaY(y){
    y.push(11)
    console.log("y interno", y)
}
mudaY(y)
console.log("y externo", y)