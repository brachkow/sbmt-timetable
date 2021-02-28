import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export class Task {
  time: number;
  subgroup: string;
  subject: string;
  address: string;
  constructor(time: number, group: string, subject: string, address: string) {
    this.time = time;
    this.subgroup = group;
    this.subject = subject;
    this.address = address;
  }
}

const getTimetableData = (xml: string) => {
  const DOM = new JSDOM(xml);
  const document = DOM.window.document;
  const tasks: Array<Task> = [];
  let date: string;
  document.querySelectorAll('tr').forEach((row, index) => {
    const cells = row.querySelectorAll('td');
    if (cells.length === 1) {
      const text = cells[0].textContent;
      if (text !== null) {
        const regex = /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/;
        const match = text.match(regex);
        if (match !== null) {
          date = match[0];
        }
      }
    } else if (
      cells.length === 4 &&
      cells[0] !== null &&
      cells[1] !== null &&
      cells[2] !== null &&
      cells[3] !== null
    ) {
      const time = dayjs(
        `${date} ${cells[0].textContent}`,
        'DD.MM.YYYY hh:mm',
      ).unix();
      const subgroup =
        cells[1].textContent !== null ? cells[1].textContent : 'No group';
      const subject =
        cells[2].textContent !== null ? cells[2].textContent : 'No subject';
      const address =
        cells[3].textContent !== null ? cells[3].textContent : 'No address';
      tasks.push(new Task(time, subgroup, subject, address));
    }
  });
  return tasks;
};

export default getTimetableData;
