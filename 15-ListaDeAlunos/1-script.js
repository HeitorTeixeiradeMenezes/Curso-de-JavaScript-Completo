function sum(){
    let numbers = Array.from(arguments)
    let numbersOnly = numbers.every(function(n){
        return typeof n === "number"
    })
    if(numbersOnly){
    return numbers.reduce(function(final, natual){
        return final + natual
    }, 0)
    }else{
        return "algo de errado aconteceu"
    }
}

function average(){
    console.log(arguments)
    console.log(...arguments)
    return sum(...arguments) / arguments.length
}

let escrevermedia = function(){
  let nomes = document.querySelectorAll("tr")
  for (let i = 1; i < nomes.length; i++) {
    let notas = nomes[i].querySelectorAll("td");
    let arrNotas = []
    for (let a = 1; a < 5; a++) {
      if (notas[a]) {
        let n = parseFloat(notas[a].textContent)
        arrNotas.push(n)
      } else {
        console.log("nada dentro do campo");
      }
    }
    let media = average(...arrNotas)
    notas[5].innerHTML = "<b>" + media + "</b>"
  }
}
escrevermedia()
