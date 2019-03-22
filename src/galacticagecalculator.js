/* eslint-disable no-unused-vars */
export default class GalacticAge {
  constructor(year) {
    this.year = year;
  }

  calculateYears(age, lifeExpectancy, extraYears, planetYear) {
    let remainder;
    const remainingLife = Math.floor((lifeExpectancy - age) / planetYear);
    const inputAge = Math.floor(age / planetYear);
    if (extraYears !== 0) {
      remainder = Math.floor(extraYears / planetYear);
    }
    else {
      remainder = "You still have some years left."
    }
    const arr = [inputAge, remainingLife, remainder];
    return arr;
  }
}

export class Earth extends GalacticAge {
  constructor() {
    super(1);
  }
}
/* eslint-disable no-unused-vars */
