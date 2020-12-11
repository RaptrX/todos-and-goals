import checker from './checker'
import logger from './logger'
import goalAlert from './goalAlert'
import todoReminder from './todoReminder'

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default applyMiddleware(
  thunk,
  checker,
  logger,
  goalAlert,
  todoReminder,
)
