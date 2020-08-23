import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.coronatracker.com/v4/analytics',
});

axiosClient.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data
  }
  return response;
});

const getData = async (url, countryCode, startDate, endDate) => {
  try {
    const data = await axiosClient.get(url, {
      params: {
        countryCode,
        startDate,
        endDate
      }
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const trendingCases = async (countryCode, startDate, endDate) => {
  return getData('/trend/country', countryCode, startDate, endDate);
}


export const newDailyCase = async (countryCode, startDate, endDate) => {
  return getData('/newcases/country', countryCode, startDate, endDate);
}