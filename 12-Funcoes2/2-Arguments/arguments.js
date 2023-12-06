
//modo Array

// function somar(arr){
//     let total = 0
//     for (let i = 0; i < arr.length; i++){
//       total += arr[i]
//     }
//     return total
// }

// console.log(somar([1,2,3]))



//modo sem array (arguments)
const somar = function s(){
    let total = 0
    for (let i = 0; i < arguments.length; i++){
      total += arguments[i]
    }
    return total
}
 console.log(somar(20,20))
 let cu = `peido`