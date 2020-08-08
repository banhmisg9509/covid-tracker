import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

function CardInfo({ title, noOfCases, lastUpdate, description, cssClasses }) {
  return (
    <Card className={cssClasses}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={noOfCases} duration={2.5} separator=',' />
        </Typography>
        <Typography color='textSecondary'>{lastUpdate}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
