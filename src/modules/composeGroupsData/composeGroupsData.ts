import { GroupInfo } from '../fetchGroupsData/fetchGroupsData';

export class Group {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

const composeGroupsData = (data: Array<GroupInfo>) => {
  const groupArray: Array<Group> = [];

  data.forEach((group: GroupInfo) => {
    groupArray.push(new Group(group.number, group.filename.slice(0, -4)));
  });

  return groupArray;
};

export default composeGroupsData;
