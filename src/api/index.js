import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2/historical/',
});

axiosClient.interceptors.response.use(function (response) {
  if (response && response.data) {
    return response.data
  }
  return response;
});

const mapData = (data) => {
  const { cases, deaths, recovered } = data;
  const dates = Object.keys(cases).map(date => {
    return {
      active: cases[date] - recovered[date],
      recovered: recovered[date],
      deaths: deaths[date],
      date,
    }
  });

  const lastDay = dates.length - 1;

  const latest = {
    ...dates[lastDay],
    delta: {
      active: dates[lastDay].active - dates[lastDay - 1].active,
      recovered: dates[lastDay].recovered - dates[lastDay - 1].recovered,
      deaths: dates[lastDay].deaths - dates[lastDay - 1].deaths,
    }
  };

  return {
    dates,
    latest,
  }
}

export const fetchData = async (country) => {
  try {
    const url = !country ? '/all' : country
    let data = await axiosClient.get(url);
    if (url !== '/all') {
      data = data.timeline
    }

    return mapData(data);

  } catch (error) {
    console.error(error);
  }
}
