import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Cards.module.css';
import CardInfo from 'components/Card/CardInfo';

function Cards({ data: { active, recovered, deaths, lastUpdate } }) {
  if (!active) {
    return 'Loading...';
  }

  const cardData = [
    {
      title: 'Active',
      noOfCases: active,
      lastUpdate,
      description: 'Number of active cases of COVID-19',
      cssClasses: styles.infected,
    },
    {
      title: 'Recovered',
      noOfCases: recovered,
      lastUpdate,
      description: 'Number of recovery cases of COVID-19',
      cssClasses: styles.recovered,
    },
    {
      title: 'Deaths',
      noOfCases: deaths,
      lastUpdate,
      description: 'Number of deaths caused by COVID-19',
      cssClasses: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {cardData.map(
          ({ title, noOfCases, lastUpdate, description, cssClasses }, id) => (
            <Grid key={id} item xs={12} md={3} className={styles.card}>
              <CardInfo
                title={title}
                noOfCases={noOfCases}
                lastUpdate={lastUpdate}
                description={description}
                cssClasses={cssClasses}
              />
            </Grid>
          )
        )}
      </Grid>
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
