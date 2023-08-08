import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

export const combineReducer = combineReducers({
  weather: weatherReducer,
})

export const appReducer = (state, action) => {
  return combineReducer(state, action);
}

export const store = configureStore({
  reducer: appReducer,
});
