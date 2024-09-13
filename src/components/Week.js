/*
 * Created Date: 2024-09-12T19:21:31                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:21:32                                          *
 */


import React from 'react';
import { useSelector } from 'react-redux';
import Day from './Day';
import TimeSlots from './timeSlots';

const Week = () => {
  let week = useSelector((state) => state.week);
  return (
    <div className='week w-full content-center'>
      <div className='w-full'>
        <div className="w-full grid8 text-center">
          <div className=''></div>
          {
            week.map((day, index) => (
                <Day day={day} key={index} />
            ))
          }
        </div>

        <TimeSlots/>
      </div>
    </div>
  );
};

export default Week;