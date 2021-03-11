import fetchTimetableData from '../fetchTimetableData';

test('Expect data to be fetched', async () => {
  const data = await fetchTimetableData('99999', 9, 9, 9);
  expect(data === 'Расписание не найдено').toBe(true);
});
