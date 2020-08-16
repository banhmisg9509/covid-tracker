import { FormControl, TextField } from '@material-ui/core';
import AutoComplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import countries from './countries.json';
import styles from './CountryPicker.module.css';

function CountryPicker({ handleCountryChange }) {
  return (
    <FormControl className={styles.formControl}>
      <AutoComplete
        id='combo-box'
        options={countries}
        getOptionLabel={({name}) => name}
        onChange={(e, value) => handleCountryChange(value.iso2 ? value.iso2 : value.name)}
        renderInput={(params) => (
          <TextField {...params} label='Countries' variant='outlined' />
        )}
      />
    </FormControl>
  );
}

export default CountryPicker;
