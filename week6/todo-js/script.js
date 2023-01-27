// DOM ELEMENTS
const newTask = document.getElementById("new-task")
const addBtn = document.getElementById("add-btn")
const message = document.getElementById("message")
const listGroup = document.getElementById("list-group")
const list = document.getElementById("list")
const totalTasks = document.getElementById("total-tasks")
const tasksDone = document.getElementById("tasks-done")

// LOCAL STORAGE
let todo_list = JSON.parse(localStorage.getItem("todo_list")) ?? []
let todo_list_length = todo_list.length

// EVENTS
window.addEventListener('DOMContentLoaded', () => {
    if (todo_list_length > 0) {
        for (let i = 0; i < todo_list_length; i++) {
            createNewListItem(todo_list[i])
        }
    }
    hideListIfEmpty()
})

newTask.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addBtn.click()
    }
})

addBtn.addEventListener('click', () => {

    let taskContent = newTask.value.trim()

    if (taskContent && taskContent !== '') {
        
        // make div visible
        list.style.visibility = 'visible'
        
        // create new list item
        createNewListItem(taskContent)
        todo_list.push(taskContent)
        
        // update total number of tasks
        totalTasksUpdate()

        // update localStorage
        storageUpdate(todo_list)

        // flush the input field
        newTask.value = ''
        message.textContent = ''
        message.style.display = 'none'
    } else {
        newTask.value = ''
        message.style.display = 'block'
        message.textContent = "Invalid input!"
    }
})

// FUNCTIONS
function createNewListItem(taskContent) {
    // new list item
    let new_task = document.createElement("li")
    new_task.setAttribute("class", "d-flex align-items-center justify-content-between list-group-item")
    new_task.textContent = taskContent
    
    // check mark button
    let new_check_button = document.createElement("button")
    new_check_button.setAttribute("class", "btn py-0")
    new_check_button.setAttribute("onclick", "onMarkDoneItemClick(this)")
    let new_check_icon = document.createElement("i")
    new_check_icon.setAttribute("class", "fa-regular fa-circle-check px-2")
    new_check_button.appendChild(new_check_icon)
    
    // trash mark button
    let new_trash_button = document.createElement("button")
    new_trash_button.setAttribute("class", "btn py-0")
    new_trash_button.setAttribute("onclick", "onDeleteItemClick(this)")
    let new_trash_icon = document.createElement("i")
    new_trash_icon.setAttribute("class", "fa-solid fa-trash px-2")
    new_trash_button.append(new_trash_icon)
    
    // buttons div
    let icon_div = document.createElement("div")
    icon_div.appendChild(new_check_button)
    icon_div.appendChild(new_trash_button)
    
    // append icon div to list item
    new_task.appendChild(icon_div)
    
    // add new list item to unordered list group
    listGroup.appendChild(new_task)
}

function hideListIfEmpty() {
    if (listGroup.innerText === '') {
        list.style.visibility = "hidden"
    } else {
        list.style.visibility = "visible"
    }
}

function onDeleteItemClick(item) {
    let item_to_delete = item.closest(".list-group-item")
    let content = item_to_delete.textContent
    // remove from DOM
    item_to_delete.remove()
    // remove from todo list
    todo_list = todo_list.filter(i => i !== content)
    storageUpdate(todo_list)
    totalTasksUpdate()
    tasksDoneUpdate()
    hideListIfEmpty()
}

function onMarkDoneItemClick(item) {
    item.closest(".list-group-item").classList.toggle("checked")
    tasksDoneUpdate()
}

function storageUpdate(list) {
    localStorage.setItem("todo_list", JSON.stringify(list))
}

function tasksDoneUpdate() {
    tasksDone.innerText = Array.from(document.querySelectorAll(".checked")).length
}

function totalTasksUpdate() {
    totalTasks.textContent = listGroup.childElementCount
}







// function getNewID() {
//     if (idNoList.length === 0) {
//         idNo = 0
//     } else {
//         for (let i = 0; i < idNoList.length; i++) {
//             if (idNo === idNoList[i]) {
//                 idNo = Math.max(...idNoList) + 1
//             } else {
//                 idNo = idNo
//             }
//         }
//     }
//     idNoList.push(idNo)
//     return idNo
// }




// function markDone(id) {
    //     id = Number(id.split("-")[1])
    //     el = document.getElementById(`task-${id}`)
    
    //     if (el.style.textDecoration === "line-through") {
        //         el.style.color = "#212529"
        //         el.style.textDecoration = "none"
//         // update number of tasks done
//         markedDoneCounter--;
//         tasksDone.innerText = markedDoneCounter
//     } else {
//         el.style.color = "rgb(170,170,170)"
//         el.style.textDecoration = "line-through"
//         // update number of tasks done
//         markedDoneCounter++
//         tasksDone.innerText = markedDoneCounter
//     }
// }



// function deleteItem(id) {
//     id = Number(id.split("-")[1])
//     el = document.getElementById(`task-${id}`)
//     // update total number of tasks marked done

//     if (el.style.textDecoration === "line-through") {
//         markedDoneCounter--;
//     }

//     // remove from the todo array
//     todo_list.splice(id, 1)
//     console.log(todo_list)
//     localStorage.setItem("todo_list", JSON.stringify(todo_list))
//     // remove from the DOM
//     el.remove()

//     tasksDone.innerText = markedDoneCounter

//     // update total number of tasks
//     totalTasks.innerText = listGroup.childElementCount

//     hideListIfEmpty()

//     // remove its ID from idNoList
//     idNoList = idNoList.filter(item => item != id)
// }