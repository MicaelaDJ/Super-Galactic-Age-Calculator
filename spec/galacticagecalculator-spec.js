/* eslint-disable no-unused-vars */
import Earth from "./../src/galacticagecalculator";

describe('GalacticAge', function() {
  let inputAge = 20;
  let lifeExpectancy = 100;
  let remainder = 0;

  it('returns the age of the user and remaining life expectancy in Earth years', function() {
    const earth = new Earth();
    expect(earth.calculateYears(inputAge, lifeExpectancy, remainder, earth.year)).toEqual([20, 80, "You still have some years left."]);
  })
})

/* eslint-disable no-unused-vars */
