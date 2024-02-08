let fnprincipal = function (cb){
    console.log("funcao principal")
    if(typeof cb === "function"){
        cb(1)
    }
}

let funcaoCb = function(n){
    console.log("numero do call back e " + n)
}

fnprincipal(funcaoCb)