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

function notaAdicionar(){
    let inputs = document.querySelector("div div")
    let i = document.querySelectorAll("div")[1].querySelectorAll("input").length
    let notaRemover = document.querySelectorAll("div")[2].querySelectorAll("input")[1]
    inputs.innerHTML += `<label for="nota${i}">Nota ${i}</label>
    <input type="text" id="nota${i}">`
    notaRemover.style.display = "block"
}

function notaRemover() {
    const inputs = document.querySelectorAll(".flex .flex input");
    const labels = document.querySelectorAll(".flex .flex label");
    const notaRemover = document.querySelectorAll("div")[2].querySelectorAll("input")[1]

    const ultimoInput = inputs[inputs.length - 1];
    const ultimoLabel = labels[labels.length - 1];
    if (inputs.length = 4 && labels.length == 4) {
        ultimoInput.remove();
        ultimoLabel.remove();
        notaRemover.style.display = "none"
    }else{
        ultimoInput.remove();
        ultimoLabel.remove();
    }
}
let obj = {
    arrays: []
  };
  
  let getValueArr = function(){
      let arr = []
      let inputs = document.querySelectorAll(".flex .flex input");
      let inputs2 = Array.from(inputs)
      let verificado = inputs2.every(function(el){
          return typeof el.value === "string" && el.value != ""
      })
      if (verificado) {
          for(let i = 0; i < inputs2.length; i++){
              arr.push(inputs2[i].value)
          }
          obj.arrays.push(arr);
          return obj
      } else {
          window.alert("valor da nota ou nome não declarado")
      }
  }
  
  let enviar = function(){
      console.log(getValueArr())
  }