// Task: Write a function that accepts 2 arguments - an array of objects with startTime and endTime of a shift in unix format 
// and a string that describes how the array can be sorted ('duration','asc','desc'), duration sorts them from longest to shortest, 
// asc sorts them by startTime in ascending order, desc sorts them by startTime in descending order.
// Use dayjs to convert the unix time to ISO format and write jest tests for the function

import dayjs from "dayjs";


// [{
//   "startTime": 1649214000,
//   "endTime": 1649235600
// },
// {
//   "startTime": 1649257200, 
//   "endTime": 1649289600
// },
// {
//   "startTime": 1649394000,
//   "endTime": 1649404800
// }]


export interface TimeShift {
  startTime: number;
  endTime: number;
}

const timeArr: TimeShift[] = [{
  "startTime": 1649214000,
  "endTime": 1649235600
},
{
  "startTime": 1649257200, 
  "endTime": 1649289600
},
{
  "startTime": 1649394000,
  "endTime": 1649404800
}]


export const unixFormat = (shift: number) => {
  return dayjs.unix(shift).format("DD-MM-YYYY HH:mm:ss")
}

export const timeSort = (shiftValue: TimeShift[], sortTime: "duration" | "asc" | "desc") => {
  const sortedTime = [...shiftValue];

  if(sortTime === "duration") {
    sortedTime.sort((a, b) => {
      const durationA = a.endTime - a.startTime;
      const durationB = b.endTime - b.startTime;
      return durationB - durationA
    })

  } else if (sortTime === "asc") {
    sortedTime.sort((a, b) => a.startTime - b.startTime)
  } else if (sortTime === "desc") {
    sortedTime.sort((a, b) => b.startTime - a.startTime)
  }

  console.log(`Sorted by ${sortTime}:`);
  sortedTime.forEach((time, index) => {
      console.log(`Shift ${index + 1}:`);
      console.log(`Start time: ${unixFormat(time.startTime)}`);
      console.log(`End time: ${unixFormat(time.endTime)}`);
      console.log(`Duration: ${time.endTime - time.startTime} seconds`);
      console.log('---');
  });

  return sortedTime;
}

const sortedDurationShift = timeSort(timeArr, "duration")
const sortedAscShifts = timeSort(timeArr, "asc");
const sortedDescShifts = timeSort(timeArr, "desc");

console.log(sortedDurationShift)
console.log(sortedAscShifts)
console.log(sortedDescShifts)

export default function Page() {
  return (
    <div></div>
  )
}