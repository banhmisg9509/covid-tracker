import { AppContext } from 'context';
import React, { useContext } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart() {
  const { data, newDailyData } = useContext(AppContext);

  const trendindCaseChart = data.length ? (
    <Line
      data={{
        labels: data.map(({ lastUpdated }) => lastUpdated),
        datasets: [
          {
            data: data.map(({ confirmed }) => (confirmed < 0 ? 0 : confirmed)),
            label: 'Confirmed',
            order: 0,
            borderColor: '#093dbac4',
          },
          {
            data: data.map(({ recovered }) => (recovered < 0 ? 0 : recovered)),
            label: 'Recovered',
            order: 1,
            borderColor: 'green',
          },
          {
            data: data.map(({ deaths }) => (deaths < 0 ? 0 : deaths)),
            label: 'Deaths',
            order: 2,
            borderColor: 'deeppink',
          },
        ],
      }}
      options={{
        title: { display: true, text: 'Past 30 days chart' },
      }}
    />
  ) : null;

  const newDailyCaseChart = newDailyData.length ? (
    <Bar
      data={{
        labels: newDailyData.map(({ lastUpdated }) => lastUpdated),
        datasets: [
          {
            data: newDailyData.map(({ newConfirmed }) =>
              newConfirmed < 0 ? 0 : newConfirmed
            ),
            label: 'New confirmed',
            order: 0,
            backgroundColor: '#093dbac4',
          },
          {
            data: newDailyData.map(({ newRecovered }) =>
              newRecovered < 0 ? 0 : newRecovered
            ),
            label: 'New recovered',
            order: 1,
            backgroundColor: 'green',
          },
          {
            data: newDailyData.map(({ newDeaths }) =>
              newDeaths < 0 ? 0 : newDeaths
            ),
            label: 'New deaths',
            order: 2,
            backgroundColor: 'deeppink',
          },
        ],
      }}
      options={{
        title: { display: true, text: 'Daily Incidences Chart' },
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {trendindCaseChart}
      <div>
        <hr />
      </div>
      {newDailyCaseChart}
    </div>
  );
}

export default Chart;
