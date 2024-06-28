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
    const lis = document.createElement("li")
    lis.className = "todo-item"
    const button = document.createElement("button")
    button.className = "button-check"
    button.innerHTML = `<i class="fas fa-check displayNone"></i>`
    button.setAttribute("dataAction", "checkButton")
    const p = document.createElement("p")
    p.className = tarefa
    p.textContent = tarefa
    const edit = document.createElement("i")
    edit.className = "fas fa-edit"
    edit.setAttribute("dataAction", "editButton")
    const trash = document.createElement("i")
    trash.className = "fas fa-trash-alt"
    trash.setAttribute("dataAction", "trashButton")

    const containerEdit = document.createElement("div")
    containerEdit.className = "editContainer"
    const inputEdit = document.createElement("input")
    inputEdit.setAttribute("type", "text")
    inputEdit.className = "editInput"
    containerEdit.appendChild(inputEdit)
    const containerEditButton = document.createElement("button")
    containerEditButton.className = "editButton"
    containerEditButton.textContent = "Edit"
    containerEditButton.setAttribute("dataAction", "containerEditButton")
    containerEdit.appendChild(containerEditButton)
    const containerCancelButton = document.createElement("button")
    containerCancelButton.className = "cancelButton"
    containerCancelButton.textContent = "Cancel"
    containerCancelButton.setAttribute("dataAction", "containerCancelButton")
    containerEdit.appendChild(containerCancelButton)

    lis.appendChild(button)
    lis.appendChild(p)
    lis.appendChild(edit)
    lis.appendChild(trash)
    lis.appendChild(containerEdit)
    return lis
}

const loadArrys = function(){
    todoList.textContent = ""
    arrLis.forEach(function(e){
        todoList.appendChild(createLi(e.titulo))
        console.log(e)
    })
}

const pushArrObj = function(tarefa){
    arrLis.push({
        titulo: tarefa,
        data: Date.now(),
        completo: false
    })
}


todoList.addEventListener("click", function(e){
    console.log(e.target.getAttribute("dataAction"))
    console.log(e)
})



submit.addEventListener("click", function(e){
    e.preventDefault()
    if(newItem.value != ""){
    pushArrObj(newItem.value)
    newItem.value = ""
    loadArrys()
    newItem.focus()
    } else{
        window.alert("preecha o Titulo")
    }
})



loadArrys()
