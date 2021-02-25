import fetchTimetableData from '../fetchTimetableData';

test('Expect data to be fetched', async () => {
  const data = await fetchTimetableData(99999, 99, 99, 99);
  expect(data === 'Расписание не найдено').toBe(true);
});
