import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { routes } from '../../routes';

const initialState = {
  data: [],
}

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city) => {
    try {
      const response = await axios.get(routes.weather(), {
        params: {
          q: `${city}`,
          appid: '41b618d03f6e61d917121c8adea8a667',
          units: 'metric',
        }
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });


const weather = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, { payload: data }) => ({
      ...state,
      data: data.list,
    }),
  },
});

export default weather.reducer;
