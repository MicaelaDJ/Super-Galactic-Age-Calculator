/* eslint-disable no-unused-vars */
import Date from "./../src/galacticagecalculator";
import Earth from "./../src/galacticagecalculator";

describe('Date', function() {
  it('should test to see if its a leap year', function() {
    let date = new Date(2019);
    expect(date.leapYear(2019, 0)).toEqual(365);
  });
});

describe('GalacticAge', function() {
  let inputAge = 20;
  let lifeExpectancy = 100;
  let excess = 0;

  it('returns the age of the user and remaining life expectancy in Earth years', function() {
    const earth = new Earth();
    expect(earth.calculateYears(inputAge, lifeExpectancy, excess, earth.year)).toEqual([20, 80, "You still have some years left."]);
  })
})

/* eslint-disable no-unused-vars */
