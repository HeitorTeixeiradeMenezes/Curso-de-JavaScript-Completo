function teste(str, n){
    console.log(this.name)
    console.log(str, n)
}
teste("cacaw", 10)
teste.call({name : "Heitor"}, "string", 10)
teste.apply({name : "Paulo"}, ["string2", 20])
teste2 = teste.bind({name : "Josiane"})
teste2("string", 30)