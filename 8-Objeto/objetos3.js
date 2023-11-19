 let produto = {
    nome: `Geladeiras`,
    estoque: 23,
    comprar: function(n){
        if(n > produto.estoque){
            console.log(`Nao temos essa quantidade de geladeiras no estoque o maximo de geladeiras que voce pode comprar sao ${produto.estoque}`)
        }
        else {
            produto.estoque -= n
            console.log(`Foram compradas ${n} Geladeiras`)
            
        }      
    }
 }
 console.log(produto)
 produto.comprar(3)
 console.log(produto)
 produto.comprar(100)
 console.log(produto)
