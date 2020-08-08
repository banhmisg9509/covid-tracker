import { fetchDailyData } from 'api';
import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart({ data: { active, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const pieChart = active ? (
    <Pie
      data={{
        labels: ['Active', 'Recovered', 'Deaths'],
        datasets: [
          {
            backgroundColor: ['#093dbac4', 'green', 'deeppink'],
            data: [active, recovered, deaths],
          },
        ],
        options: {
          circumference: Math.PI
        }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? pieChart : lineChart}</div>
  );
}

export default Chart;
