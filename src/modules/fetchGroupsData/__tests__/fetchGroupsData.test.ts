import fetchGroupsData from '../fetchGroupsData';

test('Expect data to be fetched', async () => {
  const data = await fetchGroupsData();
  expect(Array.isArray(data)).toBe(true);
});