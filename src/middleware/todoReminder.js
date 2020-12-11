import { ADD_TODO } from '../actions/todos'

const todoReminder = (store) => (next) => (action) => {
  if (action.type === ADD_TODO){
    alert(`Don't forget to ${action.todo.name}!`)
  }
  return next (action)
}

export default todoReminder
