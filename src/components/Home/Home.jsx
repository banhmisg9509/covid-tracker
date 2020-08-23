import { Cards, Chart, CountryPicker, Header} from 'components';
import React, { Fragment } from 'react';
function Home() {
  return (
    <Fragment>
      <Header />
      <Cards />
      <CountryPicker />
      <Chart />
    </Fragment>
  );
}

export default Home;
