import composeGroupsData, { Group } from '../composeGroupsData';
import data from '../__mocks__/data';

test('Expect group data to be composed into correct shape', () => {
  const groups = composeGroupsData(data);

  groups.forEach((group: Group) => {
    expect(typeof group.name).toBe('string');
    expect(typeof group.id).toBe('string');
  });
});
