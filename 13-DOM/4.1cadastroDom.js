let usuario = function(){
    let nomeUsuario = document.getElementById("username").value
    if(nomeUsuario != ""){
        document.querySelectorAll("h1")[0].style.display = "none"
        document.querySelectorAll("input")[0].style.display = "none"
        document.querySelectorAll("input")[1].style.display = "none"
        document.querySelectorAll("input")[2].style.display = "none"
        document.querySelector("label").style.display = "none" 
        document.querySelectorAll("h2")[0].style.display = "none"
        
        
        const printFinal = document.querySelectorAll("div")[1];
        printFinal.innerHTML = `<h1>Cadastro Realizado Com Sucesso</h1> <p>Obrigado(a) ${nomeUsuario}</p> <a href="4.2cadastroDom.html">Voltar para o inicio</a>`
    }
}

let username = document.getElementById("username")
let editar = function(){
    username.disabled = false
    username.focus()
}

let bloquear = function(){
    username.disabled = true
}


