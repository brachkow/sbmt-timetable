import getDatesData from '../getDatesData';
import getTimetableData from '../../getTimetableData/__mocks__/getTimetableData';

test('Expect dates extracted from mock to be correct', () => {
  const expectedResult = [
    '07.09.20',
    '14.09.20',
    '21.09.20',
    '28.09.20',
    '05.10.20',
    '12.10.20',
    '19.10.20',
    '26.10.20',
    '02.11.20',
    '09.11.20',
    '16.11.20',
    '23.11.20',
    '30.11.20',
    '07.12.20',
    '14.12.20',
    '21.12.20',
    '28.12.20',
    '04.01.21',
    '11.01.21',
    '18.01.21',
    '25.01.21',
    '01.02.21',
    '08.02.21',
    '15.02.21',
    '22.02.21',
    '01.03.21',
    '08.03.21',
    '15.03.21',
    '22.03.21',
    '29.03.21',
  ];
  const result = getDatesData(getTimetableData());
  expect(result).toStrictEqual(expectedResult);
});
