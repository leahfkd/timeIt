/*
 * Created Date: 2024-09-12T19:28:53                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:28:54                                          *
 */



import { combineReducers } from 'redux'

//list available reducers
import events from './events'
import week from './week'
import time from './time'
import currentEvents from './currentEvents'


const rootReducers = combineReducers({
  events,
  week,
  time,
  currentEvents
})

export default rootReducers;
