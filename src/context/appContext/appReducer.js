import { GET_DATA, GET_NEW_DAILY_DATA, CLEAR_NEW_DAILY_DATA } from 'types';

export default (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case GET_NEW_DAILY_DATA:
      return {
        ...state,
        newDailyData: action.payload,
      }
    case CLEAR_NEW_DAILY_DATA:
      return {
        ...state,
        newDailyData: []
      }
    default:
      return state;
  }
}