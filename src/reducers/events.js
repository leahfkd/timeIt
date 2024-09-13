/*
 * Created Date: 2024-09-12T19:35:51                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:35:51                                          *
 */



import { createSlice } from '@reduxjs/toolkit';
import { eventsObject } from '../lib/eventsObject';


const initialState = {
  events: [],
  activeWeekEvents: []
}

const _addEvent = (state, action) => {
  state.events.push(action.payload)
}

const _removeEvent = (state, action) => {
  const events = state.events
  state.events = events.filter(event => event.id !== action.payload.id);
}

const _loadDefaultEvents = (state, action) => {
  const { start, end } = action.payload
  state.events = eventsObject
// this is not a better way to do this, when have time, will move to sagas
   state.activeWeekEvents = eventsObject.filter(i=> i.timestamp >= start && i.timestamp <= end)
}

const _setActiveWeekEvents = (state, action) => {
  const { start, end } = action.payload
  const events = state.events
  events = events.filter(i=> i.timestamp >= start && i.timestamp <= end)
}

const _getEventsFromRange = (state, action) => {
  const { start, end } = action.payload
  return state.filter(i=> i.timestamp >= start && i.timestamp <= end)
}

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent : _addEvent,
    loadDefaultEvents: _loadDefaultEvents,
    removeEvent: _removeEvent,
    getEventsFromRange: _getEventsFromRange
  },
});

export const { addEvent, removeEvent, loadDefaultEvents, getEventsFromRange} = events.actions
export default events.reducer;
