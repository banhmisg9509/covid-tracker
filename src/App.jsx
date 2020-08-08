import { fetchData } from 'api';
import styles from 'App.module.css';
import { Cards, Chart, CountryPicker } from 'components';
import conronaImage from 'images/corona.png';
import React, { Component } from 'react';
import Ribbon from 'components/Ribbon/Ribbon';

export default class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ country: country, data: data });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Ribbon />
        <img src={conronaImage} alt='COVID-19' className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
