import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart({ data: { dates } }) {
  const lineChart = dates ? (
    <Line
      data={{
        labels: dates.map(({ date }) => date),
        datasets: [
          {
            data: dates.map(({ active }) => active),
            label: 'Active',
            order: 1,
            borderColor: '#093dbac4',
          },
          {
            data: dates.map(({ recovered }) => recovered),
            label: 'Recovered',
            order: 2,
            borderColor: 'green',
          },
          {
            data: dates.map(({ deaths }) => deaths),
            label: 'Deaths',
            order: 0,
            borderColor: 'deeppink',
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
