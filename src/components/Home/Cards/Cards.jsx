import { CardInfo } from 'components';
import { AppContext } from 'context';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styles from './Cards.module.css';

function Cards() {
  const { data, newDailyData } = useContext(AppContext);
  const { confirmed, recovered, deaths, lastUpdated } = data.length
    ? data[data.length - 1]
    : {};

  const { newConfirmed, newRecovered, newDeaths } = newDailyData.length
    ? newDailyData[0]
    : {};

  if (!data.length) {
    return 'Loading...';
  }

  const cardData = [
    {
      title: 'Confirmed',
      noOfCases: confirmed,
      newCases: newConfirmed,
      lastUpdated,
      description: 'Number of confirmed cases of COVID-19',
      cssClasses: styles.infected,
      textColor: styles.infectedColor,
    },
    {
      title: 'Recovered',
      noOfCases: recovered,
      newCases: newRecovered,
      lastUpdated,
      description: 'Number of recovery cases of COVID-19',
      cssClasses: styles.recovered,
      textColor: styles.recoveredColor,
    },
    {
      title: 'Deaths',
      noOfCases: deaths,
      newCases: newDeaths,
      lastUpdated,
      description: 'Number of deaths caused by COVID-19',
      cssClasses: styles.deaths,
      textColor: styles.deathsColor,
    },
  ];

  return (
    <div className={styles.container}>
      {cardData.map(
        (
          { title, noOfCases, newCases, lastUpdated, description, cssClasses, textColor },
          id
        ) => (
          <div key={id} className={styles.card}>
            <CardInfo
              title={title}
              noOfCases={noOfCases}
              newCases={newCases}
              lastUpdated={lastUpdated}
              description={description}
              cssClasses={cssClasses}
              textColor={textColor}
            />
          </div>
        )
      )}
    </div>
  );
}

Cards.propTypes = {
  data: PropTypes.object,
};

Cards.defaultProps = {
  data: {},
};

export default Cards;
