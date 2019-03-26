import { Calculator } from './../src/age.js';

describe('Calculator', function() {

//Earth
  it('should return the correct age for Earth', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(20);
  });
  it('should return the correct life expectancy for Earth', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(72)
  });
//Mercury
  it('should return the correct age for Mercury', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(83.33);
  });
  it('should return the correct life expectancy for Mercury', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(300)
  });
//Venus
  it('should return the correct age for Venus', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(31.25);
  });
  it('should return the correct life expectancy for Venus', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(112.5)
  });
//Mars
  it('should return the correct age for Mars', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(10.64);
  });
  it('should return the correct life expectancy for Mars', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(38.3)
  });
//Jupiter
  it('should return the correct age for Jupiter', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(1.69);
  });
  it('should return the correct life expectancy for Jupiter', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(6.07)
  });
//Saturn
  it('should return the correct age for Saturn', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.69);
  });
  it('should return the correct life expectancy for Saturn', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(2.44)
  });
//Uranus
  it('should return the correct age for Uranus', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.24);
  });
  it('should return the correct life expectancy for Uranus', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(.86)
  });
//Neptune
  it('should return the correct age for Neptune', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.12);
  });
  it('should return the correct life expectancy for Neptune', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(.44)
  });
//Pluto because we should appreciate all Disney characters
  it('should return the correct age for Pluto(because it is still a planet in my heart)', function () {
    let calculator = new Calculator();
    let planet = 'earth';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.08);
  });
  it('should return the correct life expectancy for Pluto(because I do not want to offend the god of death)', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(.29)
  });

});

// describe ('Earth', function() {
//   it('returns the age of the user and remaining life expectancy in Earth years', function() {
//     let earth = new Earth(20, 100, 'You still have some years left.');
//     expect(earth.inputAge).toEqual(20);
//     expect(earth.lifeExpectancy).toEqual(100);
//     expect(earth.remainder).toEqual('You still have some years left.');
//   });
// });
//
// describe ('Date', function() {
//   it('should test to see if it is a leap year', function() {
//     let date = new Date(2019);
//     expect(date.year(2019, 0)).toEqual(365);
//   })
// })
