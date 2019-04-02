export default class Calculator {
  constructor() {
    this.planets = ["earth", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
    this.ageFactors = [1, .24, .64, 1.88, 11.86, 29.46, 84.01, 164.79, 248.59];
    this.lifeExpectancies = [72, 300, 112.5, 38.3, 6.07, 2.44, 0.86, 0.44, 0.29];
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
      throw `We are only testing for planets in the Milkyway: ${planet} is not currently in our system, please register ${planet} with the agents in the black suits.`;
    }
    return planetIndex;
  }

  doTheMath(currentAge, planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let ageFactor = this.ageFactors[planetIndex];
    let ageOnPlanet = (currentAge) / (ageFactor);
    // let total = ageOnPlanet.toFixed(2);

    return Math.round(ageOnPlanet * 1e2)/1e2;
  }

  lifeExpectancy(planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let lifeExpectancy = this.lifeExpectancies[planetIndex];

    return lifeExpectancy;
  }

  remaining(currentAge, planet) {
    let planetIndex = this.getPlanetIndex(planet);
    let ageFactor = this.ageFactors[planetIndex];
    let lifeExpectancy = this.lifeExpectancies[planetIndex];
    let ageOnPlanet = (lifeExpectancy) - ((currentAge) / (ageFactor));

    return Math.round(ageOnPlanet * 1e2)/1e2;
  }
}
