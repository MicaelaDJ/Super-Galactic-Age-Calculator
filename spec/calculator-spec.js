import Calculator from './../src/calculator.js';

describe('Calculator', function() {

//Earth
  it('should return the correct age for Earth', function () {
    var calculator = new Calculator();
    var planet = 'earth';
    var age = 20;
    expect (calculator.doTheMath(age, planet)).toEqual(20);
  });
  it('should return the correct life expectancy for Earth', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    expect(calculator.lifeExpectancy(planet)).toEqual(72)
  });
  it('should return the life remaining for Earth', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(52)
  });
  it('should return the number of years a person has lived past their life expectancy on Earth', function() {
    let calculator = new Calculator();
    let planet = 'earth';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-28);
  });

//Mercury
  it('should return the correct age for Mercury', function () {
    let calculator = new Calculator();
    let planet = 'mercury';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(83.33);
  });
  it('should return the correct life expectancy for Mercury', function() {
    let calculator = new Calculator();
    let planet = 'mercury';
    expect(calculator.lifeExpectancy(planet)).toEqual(300)
  });
  it('should return the life remaining for Mercury', function() {
    let calculator = new Calculator();
    let planet = 'mercury';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(216.67)
  });
  it('should return the number of years a person has lived past their life expectancy on Mercury', function() {
    let calculator = new Calculator();
    let planet = 'mercury';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-116.67);
  });

//Venus
  it('should return the correct age for Venus', function () {
    let calculator = new Calculator();
    let planet = 'venus';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(31.25);
  });
  it('should return the correct life expectancy for Venus', function() {
    let calculator = new Calculator();
    let planet = 'venus';
    expect(calculator.lifeExpectancy(planet)).toEqual(112.5)
  });
  it('should return the life remaining for Venus', function() {
    let calculator = new Calculator();
    let planet = 'venus';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(81.25)
  });
  it('should return the number of years a person has lived past their life expectancy on Venus', function() {
    let calculator = new Calculator();
    let planet = 'venus';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-43.75);
  });

//Mars
  it('should return the correct age for Mars', function () {
    let calculator = new Calculator();
    let planet = 'mars';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(10.64);
  });
  it('should return the correct life expectancy for Mars', function() {
    let calculator = new Calculator();
    let planet = 'mars';
    expect(calculator.lifeExpectancy(planet)).toEqual(38.3)
  });
  it('should return the life remaining for Mars', function() {
    let calculator = new Calculator();
    let planet = 'mars';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(27.66)
  });
  it('should return the number of years a person has lived past their life expectancy on Mars', function() {
    let calculator = new Calculator();
    let planet = 'mars';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-14.89);
  });

//Jupiter
  it('should return the correct age for Jupiter', function () {
    let calculator = new Calculator();
    let planet = 'jupiter';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(1.69);
  });
  it('should return the correct life expectancy for Jupiter', function() {
    let calculator = new Calculator();
    let planet = 'jupiter';
    expect(calculator.lifeExpectancy(planet)).toEqual(6.07)
  });
  it('should return the life remaining for Jupiter', function() {
    let calculator = new Calculator();
    let planet = 'jupiter';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(4.38)
  });
  it('should return the number of years a person has lived past their life expectancy on Jupiter', function() {
    let calculator = new Calculator();
    let planet = 'jupiter';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-2.36);
  });

//Saturn
  it('should return the correct age for Saturn', function () {
    let calculator = new Calculator();
    let planet = 'saturn';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.68);
  });
  it('should return the correct life expectancy for Saturn', function() {
    let calculator = new Calculator();
    let planet = 'saturn';
    expect(calculator.lifeExpectancy(planet)).toEqual(2.44)
  });
  it('should return the life remaining for Saturn', function() {
    let calculator = new Calculator();
    let planet = 'saturn';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(1.76)
  });
  it('should return the number of years a person has lived past their life expectancy on Saturn', function() {
    let calculator = new Calculator();
    let planet = 'saturn';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-.95);
  });

// // //Uranus
  it('should return the correct age for Uranus', function () {
    let calculator = new Calculator();
    let planet = 'uranus';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.24);
  });
  it('should return the correct life expectancy for Uranus', function() {
    let calculator = new Calculator();
    let planet = 'uranus';
    expect(calculator.lifeExpectancy(planet)).toEqual(.86)
  });
  it('should return the life remaining for Uranus', function() {
    let calculator = new Calculator();
    let planet = 'uranus';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(.62)
  });
  it('should return the number of years a person has lived past their life expectancy on Uranus', function() {
    let calculator = new Calculator();
    let planet = 'uranus';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-.33);
  });

//Neptune
  it('should return the correct age for Neptune', function () {
    let calculator = new Calculator();
    let planet = 'neptune';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.12);
  });
it('should return the correct life expectancy for Neptune', function() {
    let calculator = new Calculator();
    let planet = 'neptune';
    expect(calculator.lifeExpectancy(planet)).toEqual(.44)
  });
  it('should return the life remaining for Neptune', function() {
    let calculator = new Calculator();
    let planet = 'neptune';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(.32)
  });
  it('should return the number of years a person has lived past their life expectancy on Neptune', function() {
    let calculator = new Calculator();
    let planet = 'neptune';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-.17);
  });

//Pluto
  it('should return the correct age for Pluto(because it is still a planet in my heart)', function () {
    let calculator = new Calculator();
    let planet = 'pluto';
    let age = 20;
    expect(calculator.doTheMath(age, planet)).toEqual(.08);
  });
  it('should return the correct life expectancy for Pluto(because I do not want to offend the god of the underworld)', function() {
    let calculator = new Calculator();
    let planet = 'pluto';
    expect(calculator.lifeExpectancy(planet)).toEqual(.29)
  });
  it('should return the life remaining for Pluto(because we should appreciate all Disney characters)', function() {
    let calculator = new Calculator();
    let planet = 'pluto';
    let currentAge = 20;
    expect(calculator.remaining(currentAge, planet)).toEqual(.21)
  });
  it('should return the number of years a person has lived past their life expectancy on Pluto(because I like pluto)', function() {
    let calculator = new Calculator();
    let planet = 'pluto';
    let currentAge = 100;
    expect(calculator.remaining(currentAge, planet)).toEqual(-.11);
  });
});
