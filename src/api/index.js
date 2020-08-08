import axios from 'axios';


export const axiosClient = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
});

axiosClient.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data
  }
  return response;
});

export const fetchData = async (country) => {
  try {
    const countryDetail = !country ? '' : `/countries/${country}`;
    const { confirmed, recovered, deaths, lastUpdate } = await axiosClient.get(countryDetail);

    return {
      active: confirmed.value - recovered.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate: new Date(lastUpdate).toDateString()
    };
  } catch (error) {
    console.error(error);
  }
}

export const fetchDailyData = async () => {
  try {
    const data = await axiosClient.get('/daily')
    return data.map(dailyData => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { countries } = await axiosClient.get('/countries');
    return countries.map(country => country.name);
  } catch (error) {
    console.error(error);
  }
}