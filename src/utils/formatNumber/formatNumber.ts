const formatNumber = (number: number) => {
  const length = number.toString().length;
  if (length === 1) {
    return `0${number}`;
  } else if (length === 2) {
    return `${number}`;
  } else {
    const error = new Error('Expected 1 or 2 digit number');
    throw error;
  }
};

export default formatNumber;
