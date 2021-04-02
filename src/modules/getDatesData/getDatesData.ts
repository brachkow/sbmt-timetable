import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const getDatesData = (xml: string) => {
  const DOM = new JSDOM(xml);
  const document = DOM.window.document;

  const dates: Array<string> = [];

  const dateElement = document.querySelector('div');
  if (dateElement !== null && dateElement.textContent !== null) {
    return dateElement.textContent
      .split(' ')
      .map((date) => date.trim())
      .filter((date) => date !== '');
  }
  return [];
};

export default getDatesData;
