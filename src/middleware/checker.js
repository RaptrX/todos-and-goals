import { ADD_GOAL } from '../actions/goals'
import { ADD_TODO } from '../actions/todos'

const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')){
    return alert("Nope, That's a bad idea")
  } else if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')){
    return alert("Nope, That's a bad idea")
  } else if ((action.type == ADD_TODO && action.todo.name.length < 1) ||
              (action.type == ADD_GOAL && action.goal.name.length < 1)) {
    return alert("Please type a name")
  } else {
    return next(action)
  }
}

export default checker
