import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://api.coronatracker.com/v3/stats/worldometer/',
});

axiosClient.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data
  }
  return response;
});

const getData = async (url, params) => {
  try {
    const data = await axiosClient.get(url, {
      params: params,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const trendingCases = async (limit) => {
  return getData('totalTrendingCases', { limit });
}