/*
 * Created Date: 2024-09-12T20:41:20                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T20:41:20                                          *
 */




import { createSlice } from '@reduxjs/toolkit';
import { getToday, getDisplayWeekDays, getDateObject } from '../lib/dateLib'

const today = getToday;
const dateObj = getDateObject(today);
const initialState = getDisplayWeekDays(dateObj)


const _setActiveDay = (state, action) => {
  state.push(action.payload)
}

const week = createSlice({
  name: 'week',
  initialState,
  reducers: {
    setActiveDay : _setActiveDay
  },
});

export const { setActiveDay, getRangeOfWeek } = week.actions
export default week.reducer
