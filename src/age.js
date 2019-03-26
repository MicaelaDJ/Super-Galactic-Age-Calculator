export default class Calculator {
  constructor() {
    this.day =
  }
}

// export function Earth(inputAge, lifeExpectancy, remainder) {
//   this.inputAge = inputAge;
//   this.lifeExpectancy = lifeExpectancy;
//   this.remainder = remainder;
// }
//
// export class Date {
//   constructor(year, month, day, countDays) {
//     this.year = year;
//     this.month = month;
//     this.day = day;
//     this.countDays = countDays;
//   }
//   year(year, month, day, countDays) {
//     const leapYearNo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     const leapYearYes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     for (let i = 0; i <= this.year; i++) {
//       if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//         countDays+=366;
//       } else {
//         countDays+=365;
//       }
//     }
//     for(let i=0; i <= this.month-1; i++) {
//       if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//         countDays+=leapYearYes[i];
//       } else {
//         countDays+=leapYearNo[i];
//       }
//     }
//     for(let i = 0; i <= this.day-1; i++) {
//       countDays +=1;
//     }
//     return countDays;
//   }
//   resetDays() {
//     this.countDays = 0;
//   }
// }
