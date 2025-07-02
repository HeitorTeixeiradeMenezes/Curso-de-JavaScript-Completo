// rest operator agrupa tudo e transforma em um array
function sum(...ns){ 
    console.log(ns)
    sum = 0
    ns.forEach(e => {
        sum += e
    });
    return console.log(sum)
}

sum(1, 5, 5, 8, 15, 43)
