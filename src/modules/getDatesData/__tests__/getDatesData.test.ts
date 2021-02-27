import getDatesData from '../getDatesData';
import data from '../__mocks__/data';

test('Expect data to be extracted', () => {
  const dates = getDatesData(data);
  expect(Array.isArray(dates)).toBe(true);
  dates.forEach((date) => {
    expect(date.match(/[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9]/)).not.toBe(null);
  });
});