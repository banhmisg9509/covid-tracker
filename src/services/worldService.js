import { trendingCases } from 'api/worldResources';

const mapTrendingData = list => {
  return list.reverse().map(data => {
    return {
      confirmed: data['totalConfirmed'],
      recovered: data['totalRecovered'],
      deaths: data['totalDeaths'],
      lastUpdated: new Date(data['lastUpdated']).toLocaleDateString()
    }
  });
}

export const getGlobalTrendingCases = async (limit) => {
  const data = await trendingCases(limit);
  return mapTrendingData(data);
}