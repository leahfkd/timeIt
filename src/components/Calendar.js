/*
 * Created Date: 2024-09-12T19:58:35                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:58:35                                          *
 */



import React from 'react';
import Week from './Week'
import Button from '../styledComponents/Button'
import { useDispatch, useSelector } from 'react-redux';
import { loadDefaultEvents } from '../reducers/events'

const Calendar = () => {
  let week = useSelector((state) => state.week);
  let events = useSelector((state) => state.events);
  // let currentEvents = useSelector((state) => state.currentEvents);
  const dispatch = useDispatch()

  const addDefaultEvents = (event) => {
    dispatch(loadDefaultEvents({start: week[0].timestamp, end: week[6].timestamp}));
  };
  const addNewEvent = (event) => {
    //todo
  };

  return (
    <div className="calendar">
     <Button onClick={addDefaultEvents} kind='info'> Load Sample Data </Button>
     <Button onClick={addNewEvent} kind='success'> Add New Event </Button>
      <Week />
    </div>
  );
};

export default Calendar;
