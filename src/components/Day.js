/*
 * Created Date: 2024-09-12T19:16:36                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:16:36                                          *
 */





import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Day = ({day}) => {

  return (
  <div className='w-full flex flex-col'>
  <div className='text-xs'>{day.dayText}</div>
    <div className='text-lg'>{day.date}</div>
  </div>
  );
};

export default Day;