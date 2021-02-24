import axios from 'axios';

interface ServerResponse {
  data: Array<GroupInfo>;
}

export interface GroupInfo {
  faculty: string;
  year: string;
  form: string;
  course: string;
  number: string;
  speciality: string;
  entranceyear: string;
  filename: string;
  xls: string;
}

const fetchGroupsData = async () => {
  const response: ServerResponse = await axios({
    method: 'get',
    url: 'https://www.timetable.sbmt.by/groups/',
  });

  return response.data;
};

export default fetchGroupsData;
