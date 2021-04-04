import { randomNumber, randomNumbers, shuffle } from '../../src/utils';

describe('utils', () => {
  it('should return random number between 1 to 100', () => {
    const ranNum = randomNumber(1, 100);
    expect(ranNum).toBeGreaterThan(0);
    expect(ranNum).toBeLessThan(100);
  });

  it('should return random number array', () => {
    const randomValues = randomNumbers(4);
    expect(randomValues).toHaveLength(4);
  });

  it('should return shuffled number array', () => {
    const arrayValues = [1, 2, 3, 4];
    const shuffledValues = shuffle(arrayValues);
    expect(shuffledValues.join('|')).not.toEqual(arrayValues.join('|'));
  });
});
