import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const getDatesData = (xml: string) => {
  const DOM = new JSDOM(xml);
  const document = DOM.window.document;

  const dates: Array<string> = [];

  document.querySelectorAll('div > a').forEach((date: Element) => {
    if (date.textContent !== null) {
      dates.push(date.textContent);
    }
  });

  return dates;
};

export default getDatesData;
