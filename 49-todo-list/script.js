const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener('submit', e => {
  e.preventDefault()
  addTodo()
})

const todos = JSON.parse(localStorage.getItem('todos'))
if (todos) todos.forEach(todo => addTodo(todo))

function addTodo(todo) {
  todoText = input.value
  let completed = false
  if (todo) {
    todoText = todo.text
    completed = todo.completed
  }
  if (todoText.length == 0) return
  input.value = ""

  const todoEl = document.createElement('li')
  todoEl.innerText = todoText
  if (completed) todoEl.classList.add('completed')
  todosUL.appendChild(todoEl)

  todoEl.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    todoEl.remove()
    updateLS()
  })

  todoEl.addEventListener('click', () => {
    todoEl.classList.toggle('completed')
    updateLS()
  })

  updateLS()
}

function updateLS() {
  const todoEls = todosUL.querySelectorAll('li')
  const todos = []
  todoEls.forEach(todo =>
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed')
    }))
  localStorage.setItem('todos', JSON.stringify(todos))
}