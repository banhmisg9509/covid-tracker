import { FormControl, TextField } from '@material-ui/core';
import AutoComplete from '@material-ui/lab/Autocomplete';
import { AppContext } from 'context';
import React, { useContext, Fragment } from 'react';
import { getNDaysAfter, getNDaysBefore } from 'utils';
import countries from './countries.json';
import styles from './CountryPicker.module.css';
import { FlagIcon } from 'components';

function CountryPicker() {
  const {
    getGlobalData,
    getCountryData,
    getNewDailyCountryData,
    clearNewDailyCountryData,
  } = useContext(AppContext);
  const handleCountryChange = (countryCode) => {
    if (countryCode) {
      getCountryData(countryCode, getNDaysBefore(30), getNDaysAfter(1));
      getNewDailyCountryData(countryCode, getNDaysBefore(30), getNDaysAfter(1));
    } else {
      getGlobalData();
      clearNewDailyCountryData();
    }
  };

  return (
    <FormControl className={styles.formControl}>
      <AutoComplete
        id='combo-box'
        options={countries}
        getOptionLabel={({ name }) => name}
        onChange={(_, value) => handleCountryChange(value ? value.code.toUpperCase() : '')}
        renderOption={(option) => (
          <Fragment>
            <FlagIcon code={option.code} />{' '}
            <span style={{ display: 'inline-block', marginLeft: '5px' }}>
              {option.name}
            </span>
          </Fragment>
        )}
        renderInput={(params) => (
          <TextField {...params} label='Countries' variant='outlined' />
        )}
      />
    </FormControl>
  );
}

export default CountryPicker;
