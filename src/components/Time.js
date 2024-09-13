/*
 * Created Date: 2024-09-12T22:24:08                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T22:24:08                                          *
 */



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Time = ({day, time}) => {

  let { activeWeekEvents, events} = useSelector((state) => state.events)
  let week = useSelector((state) => state.week);
  const dispatch = useDispatch();
  
  const timeEvents = activeWeekEvents.filter(i=> i.time === time && i.date === day.date)

  const hasEvents = events.length > 0

  return (
  <div className='w-full flex flex-col'>

    {hasEvents ? 

timeEvents.map((e, index) => (
        e.visible ? 
        <div className='event-data' key={index}>
          <div className='description'> {e.description}</div>
          <div className='actions'>
            {/* TODO: ADD delete/update */}
          </div>
        </div >
        : ''
      ))
    
    : ''}
  </div>
  );
};

export default Time;