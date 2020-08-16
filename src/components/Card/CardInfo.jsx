import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

function CardInfo({ title, noOfCases, lastUpdate, description, cssClasses, colorText, delta }) {
  return (
    <Card className={cssClasses}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={noOfCases} duration={2.5} separator=',' />
        </Typography>
        <Typography variant='button' className={colorText}>
          {Math.abs(delta) + (delta >= 0 ? '+' : '-')}
        </Typography>
        <Typography color='textSecondary'>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
