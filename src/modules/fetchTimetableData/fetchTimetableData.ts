import axios from 'axios';
import formatNumber from '../../utils/formatNumber/formatNumber';

interface ServerResponse {
  data: string;
}

const fetchTimetableData = async (
  group: string,
  day: number,
  month: number,
  year: number,
) => {
  try {
    const response: ServerResponse = await axios({
      method: 'get',
      url: `https://www.timetable.sbmt.by/group/${group}/${formatNumber(
        day,
      )}-${formatNumber(month)}-20${formatNumber(year)}/`,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchTimetableData;
