/*
 * Created Date: 2024-09-12T18:33:13                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T18:33:13                                          *
 */



const getToday = new Date();
const getYesterday = (date) => new Date((date).valueOf() - 1000*60*60*24);
const getNextDay = (date) => new Date((date).getTime() + (24 * 60 * 60 * 1000));


const getMonth = (date) => {
  return date.getMonth() + 1;
}

const getDate = (date) => {
  return date.getDate();
}
const getYear = (date) => {
  return date.getFullYear();
}

const getDateObject = (date) => {
  const formatter = new Intl.DateTimeFormat('en-Us', { weekday: 'short' });
  return {
    date: getDate(date),
    year: getYear(date),
    month: getMonth(date),
    day: date.getDay(),
    dayText: formatter.format(date),
    dateISO: date.toISOString(),
    timestamp: date.valueOf()
  }
}

const getDisplayWeekDays = ({date, month, year}) => {
  console.log(date)
  return Array.from({ length: 7 }, (_, i) => {
    const currentDate = new Date(year, month-1, i + date);
    let dateObj = getDateObject(currentDate);
    return dateObj
  });
}

const getTimeSlots = (startTime, endTime, intervalMinutes) => {
  const time = []
  const current = getToday
  const start = new Date(current.toDateString() + ' ' + startTime);
  const end = new Date(current.toDateString() + ' ' + endTime);

  while (start < end) {
    const hours = String(start.getHours()).padStart(2, '0');
    const minutes = String(start.getMinutes()).padStart(2, '0');
    time.push(`${hours}:${minutes}`);
    start.setMinutes(start.getMinutes() + intervalMinutes);
  }
  
  return time;
}


export {
  getToday,
  getYesterday,
  getNextDay,
  getMonth,
  getDate,
  getYear,
  getDateObject,
  getDisplayWeekDays,
  getTimeSlots
}
