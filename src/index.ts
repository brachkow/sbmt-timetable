const fs = require('fs');

import fetchGroupsData from './modules/fetchGroupsData/fetchGroupsData';
import composeGroupsData, {
  Group,
} from './modules/composeGroupsData/composeGroupsData';
import fetchTimetableData from './modules/fetchTimetableData/fetchTimetableData';
import getDatesData from './modules/getDatesData/getDatesData';
import getTimetableData, {
  Task,
} from './modules/getTimetableData/getTimetableData';
import ical from 'ical-generator';
import dayjs from 'dayjs';

const main = async () => {
  const calendarsArray: Array<String> = [];
  const groups = composeGroupsData(await fetchGroupsData());
  [{ name: '952', id: '952' }].forEach(async (group) => {
    // groups.forEach(async (group: Group) => {
    const dates = getDatesData(await fetchTimetableData(group.id, 99, 99, 99));
    const calendar = ical({
      domain: `sbmt-timetable.brachkow.com/group/${group.name}`,
      name: group.name,
    });

    async function getTimetable() {
      const generatedResponse: Array<Task> = [];
      await Promise.all(
        dates.map(async (date) => {
          try {
            const dateArr = date.split('.').map((item) => Number(item));
            const week = getTimetableData(
              await fetchTimetableData(
                group.id,
                dateArr[0],
                dateArr[1],
                dateArr[2],
              ),
            );
            generatedResponse.push(...week);
          } catch (error) {
            console.log('error' + error);
          }
        }),
      );
      return generatedResponse;
    }

    const timetable = await getTimetable();

    timetable.forEach((task) => {
      calendar.createEvent({
        start: new Date(task.time),
        end: new Date(task.time + 4800000),
        summary: task.subject,
        description: task.teacher,
        location: task.address,
      });
    });
    calendarsArray.push(calendar.toString());
    fs.writeFileSync(`dist/group/${group.name}.ics`, calendar.toString());
  });
  return calendarsArray;
};

main();

export default main;
