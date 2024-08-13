function Task(name){
    "use strict"
    this.name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.changeName = function(newName){
        this.name = newName
        this.updatedAt = new Date()
    }
}

const task1 = new Task("minhatarefa")
console.log(task1)
task1.changeName("e")
console.log(task1)
