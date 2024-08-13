function changeName(name){
    console.log(name)
    console.log(this)
}

changeName("aaa")


const task1 = {
    name: "task1",
    cretedAt: new Date(),
    completed: false,
}
const task2 = {
    name: "task2",
    cretedAt: new Date(),
    completed: true
}
console.log(task1.name ="task1uptaded")
console.log(task1)
