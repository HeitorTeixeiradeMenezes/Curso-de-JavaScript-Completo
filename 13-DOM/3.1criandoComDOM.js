let criar = function (){
    let texto = "aqui esta o texto aplicado"
    if(texto){
        const elemento = document.createElement("div")
        elemento.innerHTML = '<p>'+ texto + '</p>'
        
        
        const pai = document.querySelector("div")
        
        pai.insertBefore(elemento, pai.firstElementChild)
    }
}
criar()

