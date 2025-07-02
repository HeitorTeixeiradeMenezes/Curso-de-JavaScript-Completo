function criarCachorro(name){
    let posicao = 0
    return{
        name,
        latir(){
            console.log(this.name, "esta latindo")
            return this
        },
        andar(distancia){
            posicao += distancia
            console.log(this.name, "andou", distancia + "m")
            return this
        },
        pegarPosicao(){
            console.log(posicao + "m")
            return this
        },
        // get permite usar o metodo como se fosse uma propriedade
        get posicao(){
            return posicao + "m"
        }
    }
}
const rex = criarCachorro("Rex")
rex.latir().andar(30).andar(2).pegarPosicao()

const toto = criarCachorro("Toto")
toto.andar(10).pegarPosicao().andar(-3).pegarPosicao()
console.log("get posicao", toto.posicao)