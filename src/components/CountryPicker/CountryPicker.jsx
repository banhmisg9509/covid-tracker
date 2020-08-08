import React, { useState, useEffect } from 'react';
import { fetchCountries } from 'api';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';

function CountryPicker({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>GLobal</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
