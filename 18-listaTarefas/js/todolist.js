const submit = document.querySelector("#add-item")
const todoList = document.querySelector("#todo-list")
const newItem = document.querySelector("#item-input")

let arrLis = [
    {
        titulo: "Cu",
        data: Date.now(),
        completo: false
    }
]


const createLi = (tarefa) =>{
    lis = document.createElement("li")
    lis.className = "todo-item"
    button = document.createElement("button")
    button.className = "button-check"
    button.innerHTML = `<i class="fas fa-check displayNone"></i>`
    p = document.createElement("p")
    p.className = tarefa
    p.textContent = tarefa
    edit = document.createElement("i")
    edit.className = "fas fa-edit"
    trash = document.createElement("i")
    trash.className = "fas fa-trash-alt"
    lis.appendChild(button)
    lis.appendChild(p)
    lis.appendChild(edit)
    lis.appendChild(trash)
    return lis
}

const pushArrObj = function(tarefa){
    arrLis.push({
        titulo: tarefa,
        data: Date.now(),
        completo: false
    })
}



submit.addEventListener("click", function(e){
    e.preventDefault()
    if(newItem.value != ""){
    pushArrObj(newItem.value)
    todoList.appendChild(createLi(newItem.value))
    newItem.focus()
    } else{
        window.alert("preecha o Titulo")
    }
})

// Mudar o estilo do append child para ler os objs do Array
