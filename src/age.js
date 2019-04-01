export default class Calculator {
  constructor() {
    this.day =
  }
}
export default class AgeCalculator {
  constructor() {
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
    this.ageFactors = [1, 4.16, 1.56, 0.53, 0.08, 0.03, 0.01, 0.006, 0.004];
    this.lifeExpectancies = [72, 83.33, 31.25, 10.64, 1.69, 0.69, 0.24, 0.12, 0.08];
  }

  calculateAge(age, planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let ageFactor = this.ageFactors[planetIndex];
    let ageOnPlanet = parseFloat(earthAge) * parseFloat(ageFactor);

    return ageOnPlanet;
  }

  calculateLifeYearRemaining(age, planet, lifestyleFactors) {
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
