import { ADD_GOAL } from '../actions/goals'

const goalAlert = (store) => (next) => (action) => {
  if (action.type === ADD_GOAL){
    alert("That's a great goal")
  }
  return next(action)
}

export default goalAlert
