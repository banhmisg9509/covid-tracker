import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

function CardInfo({
  title,
  noOfCases,
  newCases,
  lastUpdated,
  description,
  cssClasses,
  textColor,
}) {
  return (
    <Card className={cssClasses}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={noOfCases} duration={2.5} separator=',' />
        </Typography>
        {newCases !== undefined && (
          <Typography className={textColor}>{newCases}+</Typography>
        )}
        <Typography color='textSecondary'>{lastUpdated}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
