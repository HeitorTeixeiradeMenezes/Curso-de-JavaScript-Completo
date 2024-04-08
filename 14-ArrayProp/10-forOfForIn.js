const arr = [1, 2, 3, 4]
const obj = {
    nome: "Maria",
    idade: "69",
    email: "mariacrazy@gmail.com",
}
for(let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}

for(n of arr){
    console.log(n)
}