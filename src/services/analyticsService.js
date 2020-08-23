import { trendingCases, newDailyCase } from 'api/analyticsResources'

const mapTrendingData = list => {
  return list.map(data => {
    return {
      confirmed: data['total_confirmed'],
      recovered: data['total_recovered'],
      deaths: data['total_deaths'],
      lastUpdated: new Date(data['last_updated']).toLocaleDateString()
    }
  });
}

const mapNewDailyData = list => {
  return list.map(data => {
    return {
      newConfirmed: data['new_infections'],
      newRecovered: data['new_recovered'],
      newDeaths: data['new_deaths'],
      lastUpdated: new Date(data['last_updated']).toLocaleDateString()
    }
  });
}

export const getCountryTrendingCases = async (params) => {
  const { countryCode, startDate, endDate } = params;
  const data = await trendingCases(countryCode, startDate, endDate);
  return mapTrendingData(data);
}

export const getNewDailyCases = async (params) => {
  const { countryCode, startDate, endDate } = params;
  const data = await newDailyCase(countryCode, startDate, endDate);
  return mapNewDailyData(data);
}