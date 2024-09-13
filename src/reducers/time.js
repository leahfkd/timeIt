/*
 * Created Date: 2024-09-12T19:38:28                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:38:28                                          *
 */



import { createSlice } from '@reduxjs/toolkit';
import { getTimeSlots } from '../lib/dateLib'

import { timeSlotStart, timeSlotEnd} from '../lib/constants'

const initialState = getTimeSlots(timeSlotStart, timeSlotEnd, 60);
const time = createSlice({
  name: 'time',
  initialState,
  reducers: {
  },
});

// export const { setActiveDay} = time.actions
export default time.reducer
