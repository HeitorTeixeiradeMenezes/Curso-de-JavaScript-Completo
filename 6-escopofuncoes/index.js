// n no escopo global
let n = `global`
console.log(`valor de n: ${n}`)

// n na funcao
function mostran(){
    let n = `local`
    console.log(`valor de n: ${n}` )
    if(true){
        var n2 = `n2 dentro da funcao :local`
    }
    console.log(n2)
}
mostran();

// n na funcao externa e interna
function Fnext(){
    let n = `FnExt`
    console.log(n)
    function Fnint(){
        let n = `FnInt`
        console.log(n)
    }  
    Fnint()
}
Fnext()
