const str = "string global"

function teste(str){
    console.log(this)
    console.log(str)
}
teste("parametro")

const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}



const obj = {
    foo : "barr",
    teste: teste,
    teste2: teste2
}
obj.teste()
obj.teste2()