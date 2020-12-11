import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addToDo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeToDo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleToDo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeToDo(todo.id))
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addToDo(todo))
      alert('An error occured, please try again')
    })
  }
}

export function handleToggleTodo(id){
  return (dispatch) => {
    dispatch(toggleToDo(id))
    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleToDo(id))
      alert('An error occured, please try again')
    })
  }
}

export function handleAddTodo(name, callBack) {
  return (dispatch) => {
    return API.saveTodo(name).then((todo) => {
      dispatch(addToDo(todo))
      callBack()
    }).catch(() => {
      alert('unable to add todo')
    })
  }
}
