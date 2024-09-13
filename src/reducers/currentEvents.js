/*
 * Created Date: 2024-09-12T22:59:27                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T22:59:27                                          *
 */


/**
 * note: i think better to handle using saga, but moving this states in events for now, maybe later when i have time i will setup the sagas
 */

import { createSlice } from '@reduxjs/toolkit';
import { getTimeSlots } from '../lib/dateLib'

import { timeSlotStart, timeSlotEnd} from '../lib/constants'

const initialState = {}
///
const _setCurrentEvents = (state, action) => {
  const { start, end, events } = action.payload
  state = events.filter(i=> i.timestamp >= start && i.timestamp <= end)
  console.log(state)
}
const currentEvents = createSlice({
  name: 'currentEvents',
  initialState,
  reducers: {
    setCurrentEvents: _setCurrentEvents
  },
});

export const { setCurrentEvents} = currentEvents.actions
export default currentEvents.reducer
