import axios from 'axios';

interface ServerResponse {
  data: string;
}

const fetchTimetableData = async (
  group: string,
  day: number,
  month: number,
  year: number,
) => {
  const response: ServerResponse = await axios({
    method: 'get',
    url: `https://www.timetable.sbmt.by/group/${group}/${day}-${month}-${year}/`,
  });

  return response.data;
};

export default fetchTimetableData;
