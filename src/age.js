export function Earth(inputAge, lifeExpectancy, remainder) {
  this.inputAge = inputAge;
  this.lifeExpectancy = lifeExpectancy;
  this.remainder = remainder;
}

// export class Age {
//   constructor(year) {
//     this.year = year;
//   }
//
//   calculateYears(age, lifeExpectancy, extraYears, planetYear) {
//     let remainder;
//     const remainingLife = Math.floor((lifeExpectancy - age) / planetYear);
//     const inputAge = Math.floor(age / planetYear);
//     if (extraYears !== 0) {
//       remainder = Math.floor(extraYears / planetYear);
//     }
//     else {
//       remainder = "You still have some years left."
//     }
//     const arr = [inputAge, remainingLife, remainder];
//     return arr;
//   }
// }
//
// export class Earth extends Age {
//   constructor() {
//     super(1);
//   }
// }
