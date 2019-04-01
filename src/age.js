export default class Calculator {
  constructor() {
    this.day =
  }
}
export default class AgeCalculator {
  constructor() {
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
    this.ageFactors = [20, 83.33, 31.25, 10.64, 1.69, .69, .24, .12, .];
    this.lifeExpectancies = [78, 325.26, 125.58, 41.34, 6.55];
  }

  calculateAge(earthAge, planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let ageFactor = this.ageFactors[planetIndex];
    let ageOnPlanet = parseFloat(earthAge) * parseFloat(ageFactor);

    return ageOnPlanet;
  }

  calculateLifeYearRemaining(earthAge, planet, lifestyleFactors) {
    let ageOnPlanet = this.calculateAge(earthAge, planet);
    let lifeExpectancyOnPlanet = this.getLifeExpectancy(planet);
    if (lifestyleFactors && lifestyleFactors.length > 0) {
      for (let factorIndex = 0; factorIndex < lifestyleFactors.length; factorIndex++) {
        let modifier = this.getLifestyleModifier(lifestyleFactors[factorIndex]);
        lifeExpectancyOnPlanet = lifeExpectancyOnPlanet * modifier;
      }
    }

    let yearRemain = lifeExpectancyOnPlanet - ageOnPlanet;
    return yearRemain;
  }


  getLifeExpectancy(planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let lifeExpectancy = this.lifeExpectancies[planetIndex];

    return lifeExpectancy;
  }


  getLifestyleModifier(factor) {
    let modifier = -1;
    for (let index = 0; index < this.lifeExpectancyModifiers.length; index++) {

      if (this.lifeExpectancyModifiers[index][0].toLowerCase() == factor.toLowerCase()) {
        modifier = this.lifeExpectancyModifiers[index][1];
        break;
      }
    }

    if (modifier < 0) {
      throw `Factor not supported: ${factor}.  You may be factoring in a lifestyle choice we are not cool enough to know about (i.e. you're either French or rich!!).`;
    }

    return modifier;
  }

  getPlanetIndex(planet) {
    let planetIndex = -1;
    for (let index = 0; index < this.planets.length; index++) {
      if (this.planets[index].toLowerCase() == planet.toLowerCase()) {
        planetIndex = index;
        break;
      }
    }

    if (planetIndex < 0) {
      throw `Planet not supported: ${planet}.  You may be from a star system that we do not recognize as having lifeforms (i.e. you're an alien...watch out!!).`;
    }

    return planetIndex;
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
