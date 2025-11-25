const textInput = document.getElementById("textInput");
const add = document.getElementById("add");
const todo_list = document.getElementById("todo-list");

let todo = [];

textInput.addEventListener("input",updateInput);
add.addEventListener("click",addTask);
let currentInput = "";

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todo))
}
function loadTodo(){

    const data = JSON.parse(localStorage.getItem("todos"));
    if(data)todo=data;
    renderTodo();

}

function addTask(){
    if(!currentInput)return;
    todo.push({id:Date.now(),text:currentInput,complete:false});
    saveTodo();
    renderTodo()
    currentInput = "";
    textInput.value = "" ;
    console.log(todo)
}

let currentFilter = "all";
document.getElementById("filters").addEventListener("click",(e)=>{
    if(!e.target.dataset.filter)return;

    currentFilter = e.target.dataset.filter;
    renderTodo();
})


function renderTodo(){
    let filtered = todo;
    if(currentFilter==="complete"){
        filtered = todo.filter(item=> item.complete)
    }
    if(currentFilter ==="incomplete"){
        filtered = todo.filter(item => !item.complete)
    }

    todo_list.innerHTML = "";

    filtered.forEach(item =>{
        const li = document.createElement("li");
        li.innerHTML=
        `<input type="checkbox" class="check" data-id="${item.id}" ${item.complete?"checked":""} />
        <span class="${item.complete?"done":""}" data-id="${item.id}">${item.text} </span>
        <button class="delete-btn" data-id="${item.id}">Delete</button>`;
        

        const delete_btn = li.querySelector(".delete-btn");
        delete_btn.addEventListener("click",handleDelete);

        const check = li.querySelector(".check");
        check.addEventListener("change",handleCheck);
        todo_list.appendChild(li);
    })
}


function handleCheck(e){
    const id = Number(e.target.dataset.id);
    todo = todo.map(item=> item.id === id?{...item,complete:!item.complete}:item)
    renderTodo()
}
function handleDelete(e){
    const id = Number(e.target.dataset.id);
    console.log(e.target.dataset)
    todo = todo.filter(item => item.id!==id);
    saveTodo();
    renderTodo();
}



function updateInput(e){
    currentInput = textInput.value.trim(); 
}
loadTodo();
