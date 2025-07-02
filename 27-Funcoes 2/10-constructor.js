function Cachorro(name){
    let posicao = 0
    this.name = name
    this.andar = function(distancia){
        posicao += distancia
        console.log("andou", distancia + "m")
        return this
    }
    this.posicao = function(){
        console.log(posicao)
        return this
    }
}
const rex = new Cachorro("rex")
rex.andar(20).posicao().andar(-3).posicao()