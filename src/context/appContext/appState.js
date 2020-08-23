import React, { useReducer, useEffect } from 'react';
import AppReducer from './appReducer';
import AppContext from './appContext';
import { getGlobalTrendingCases } from 'services/worldService';
import { getCountryTrendingCases, getNewDailyCases } from 'services/analyticsService';
import { GET_DATA, GET_NEW_DAILY_DATA, CLEAR_NEW_DAILY_DATA } from 'types';

const AppState = ({ children }) => {
  const initialState = {
    data: [],
    newDailyData: []
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    getGlobalData()
  }, [])

  const getGlobalData = async (limit = 30) => {
    const data = await getGlobalTrendingCases(limit);
    dispatch({ type: GET_DATA, payload: data });
  }

  const getCountryData = async (countryCode, startDate, endDate) => {
    const params = { countryCode, startDate, endDate }
    const data = await getCountryTrendingCases(params);
    dispatch({ type: GET_DATA, payload: data });
  }

  const getNewDailyCountryData = async (countryCode, startDate, endDate) => {
    const params = { countryCode, startDate, endDate }
    const data = await getNewDailyCases(params);
    dispatch({ type: GET_NEW_DAILY_DATA, payload: data });
  }

  const clearNewDailyCountryData = () => {
    dispatch({ type: CLEAR_NEW_DAILY_DATA });
  }

  return (
    <AppContext.Provider
      value={{
        data: state.data,
        newDailyData: state.newDailyData,
        country: state.country,
        getGlobalData,
        getCountryData,
        getNewDailyCountryData,
        clearNewDailyCountryData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
