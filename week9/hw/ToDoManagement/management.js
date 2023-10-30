//import module (common JS)
const {Todo}=require('./ToDo.js')

function TodoManagement(){
    let todos=[]

    function addTodo(desc){
        const obj=new Todo(todos.length+1,desc)
        todos.push(obj)
        return todos.length
    }

    function findTodo(searchId){
        return todos.filter((todo)=>todo.id===searchId)
        
    }

    function findIndexTodo(searchId){
        return todos.filter((todo)=>todo.id===searchId).map((user)=>{return user.id})
    }

    function removeTodo(searchId){
        todos.splice(searchId-1,1)
        return `Todo number : ${searchId} is deleted.`
    }

    function getTodos(){
        return todos
    }

    return {
        addTodo,findTodo,findIndexTodo,removeTodo,getTodos
    }
}
// const todoManager = TodoManagement();
const {addTodo,findIndexTodo,findTodo,removeTodo,getTodos}=TodoManagement();


console.log(addTodo('Eat breakfast'));
console.log(addTodo('watch movie cuz my life is kinda boring'));
console.log(addTodo('swim back to house no.201'));
console.log(addTodo('Go hell is better than studying IT'));
console.log(findTodo(2));
console.log(findIndexTodo(2));
console.log(removeTodo(1));
console.log(getTodos());
