/*
 * Created Date: 2024-09-12T22:04:55                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T22:04:55                                          *
 */



import React from 'react';
import { useSelector } from 'react-redux';
import Time from './Time';

const TimeSlots = ({day}) => {
  let time = useSelector((state) => state.time);
  let week = useSelector((state) => state.week);
  return (
    <div className='w-full'>
      {
        time.map( (slot , i) =>
        <div key={i} className='w-full grid8 text-center max-h-16 min-h-16'>
          {slot}
          {
            week.map((day, index) => (
                <Time day={day} key={index} time={slot} />
            ))
          }
        </div>
      )
      }
      
    </div>
      
  );
};

export default TimeSlots;