let arr = [1, 1, 2, 2, 3, 3, 69, 24, 69, 24]

let nunico = arr.reduce(function(nfinal, natual){
 if(nfinal.indexOf(natual) < 0){
    nfinal.push(natual)
 }
 return nfinal
}, [])

console.log(nunico)