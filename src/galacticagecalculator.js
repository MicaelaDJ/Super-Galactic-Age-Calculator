/* eslint-disable no-unused-vars */
export default class Date {
  constructor(year, month, day, countDays) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.countDays = countDays
  }
  leapYear(year, month, day, countDays) {
    const leapYearYes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const leapYearNo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 0; i <= this.year-1; i++){
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        countDays+=366;
      } else {
        countDays+=365;
      }
    }
    for(let i = 0; i <= this.month-1; i++){
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        countDays+=leapYearYes[i];
      } else {
        countDays+=leapYearNo[i];
      }
    }
    for(let i = 0; i <= this.day-1; i++){
      countDays += 1;
    }
    return countDays;
  }
}
/* eslint-disable no-unused-vars */
