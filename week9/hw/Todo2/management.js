const { Todo } = require('./Todo.js')

function TodoManagement() {
  let todos = []

  function addTodo(desc) {
    todos.push(new Todo(todos.length+1, desc))
    return todos.length
  }

  function findTodo(searchId) {
    return todos.filter((todo) => todo.id === searchId)
  }

  function findIndexTodo(searchId) {
    const todoIndex = todos.findIndex((todo) => todo.id === searchId)
    return todoIndex
  }

  function removeTodo(removeId){
    todos.splice(findIndexTodo(removeId),1)
    
  }

  function getTodoes(){
    return todos
  }

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodoes

  }
}
const { addTodo, findTodo, findIndexTodo ,removeTodo,getTodoes} = TodoManagement()

console.log(addTodo('sing a song'))
console.log(addTodo('cooking'))
console.log(addTodo('movie time'))
console.log(addTodo('go to uni'))
console.log(findTodo(1))
console.log(findIndexTodo(3)) //1
console.log(removeTodo(1));
console.log(getTodoes());


// [{1,'sing a song'},{2,'cooking'}]
