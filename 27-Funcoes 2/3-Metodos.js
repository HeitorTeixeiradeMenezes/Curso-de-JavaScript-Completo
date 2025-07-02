function latir(){
    console.log(this.nome,"fala : au au")
}
function miar(){
    console.log(this.nome,"fala : miau")
}

const dog = {
    nome: "xuxu",
    falar : latir,
    falar2(){ // posso omitir o nome da funcao (chama-se METODO)
        console.log("fala2")
    }
}
const cat = {
    nome : "mingau",
    falar : miar,
    falar2(){ // nao e possivel fazer isso pq fica undefined o this
        miar.call(this) // se torna possivel quando uso o metodo call
    }
}

dog.falar()
dog.falar2()
cat.falar()
cat.falar2()

