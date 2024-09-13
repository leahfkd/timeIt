/*
 * Created Date: 2024-09-12T18:27:58                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T18:27:58                                          *
 */


import * as dateLib from './dateLib'

const today = dateLib.getToday
const yesterday = dateLib.getYesterday(today)
const nextDay = dateLib.getNextDay(today)


export const eventsObject = [
  {
    id: 1,
    time: '11:00',
    description: 'Dentist Appointment',
    tags: {},
    visible: true,
    ...dateLib.getDateObject(today)
  },
  {
    id: 2,
    time: '11:00',
    description: 'Tempo 1',
    tags: {},
    visible: true,
    ...dateLib.getDateObject(yesterday)
  },
  {
    id: 3,
    time: '12:00',
    description: 'Back Day',
    tags: {},
    visible: true,
    ...dateLib.getDateObject(nextDay)
  }
]

