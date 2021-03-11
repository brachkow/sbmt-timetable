import random from 'lodash/random';
import formatNumber from '../formatNumber';

test('Expect 3+ digit number to throw error', () => {
  try {
    formatNumber(random(100, 999));
  } catch (error) {
    expect(error).toEqual(new Error('Expected 1 or 2 digit number'));
  }
});

test('Expect 2 digit number to return exact same string', () => {
  const number = random(10, 99);
  expect(formatNumber(number)).toBe(`${number}`);
});

test('Expect 1 digit number to return correct formatted string', () => {
  const number = random(0, 9);
  expect(formatNumber(number)).toBe(`0${number}`);
});
