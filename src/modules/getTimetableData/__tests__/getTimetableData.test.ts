import data from '../__mocks__/data';
import getTimetableData from '../getTimetableData';

test('Expect to return an array', () => {
  expect(Array.isArray(getTimetableData(''))).toBe(true);
});

test('Expect data to be returned in a correct shape', () => {
  getTimetableData(data).forEach((task) => {
    expect(typeof task.time).toBe('number');
    expect(typeof task.subgroup).toBe('string');
    expect(typeof task.subject).toBe('string');
    expect(typeof task.address).toBe('string');
  });
});
