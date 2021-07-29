import axios from 'axios';

axios.defaults.baseURL =  'http://api.weatherapi.com/v1/'

export const fetchData = async (url: string) => {
  let response;
  try {
    response = await axios.get(url);
  } catch (e) {
    throw new Error(e.message)
  }
  return response?.data ? response?.data : null
}

