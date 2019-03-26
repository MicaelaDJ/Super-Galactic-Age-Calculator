import { Earth } from './../src/age.js';

describe ('Earth', function() {
  it('returns the age of the user and remaining life expectancy in Earth years', function() {
    let earth = new Earth(20, 100, 'You still have some years left.');
    expect(earth.inputAge).toEqual(20);
    expect(earth.lifeExpectancy).toEqual(100);
    expect(earth.remainder).toEqual('You still have some years left.');
  });
});

describe('Age', function() {
  it('returns the age of the user and remaining life expectancy in Earth years', function() {
    const earth = new Earth();
    
  });
});
