import CardInfo from 'components/Card/CardInfo';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Cards.module.css';

function Cards({
  data: { active, recovered, deaths, date: lastUpdate, delta },
}) {
  if (!active) {
    return 'Loading...';
  }

  const cardData = [
    {
      title: 'Active',
      noOfCases: active,
      delta: delta.active,
      lastUpdate,
      description: 'Number of active cases of COVID-19',
      colorText: styles.infectedColor,
      cssClasses: styles.infected,
    },
    {
      title: 'Recovered',
      noOfCases: recovered,
      delta: delta.recovered,
      lastUpdate,
      description: 'Number of recovery cases of COVID-19',
      colorText: styles.recoveredColor,
      cssClasses: styles.recovered,
    },
    {
      title: 'Deaths',
      noOfCases: deaths,
      delta: delta.deaths,
      lastUpdate,
      description: 'Number of deaths caused by COVID-19',
      colorText: styles.deathsColor,
      cssClasses: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      {cardData.map(
        ( { title, noOfCases, lastUpdate, description, colorText, cssClasses, delta, }, id ) => (
          <div key={id} className={styles.card}>
            <CardInfo
              title={title}
              noOfCases={noOfCases}
              lastUpdate={lastUpdate}
              description={description}
              colorText={colorText}
              cssClasses={cssClasses}
              delta={delta}
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
