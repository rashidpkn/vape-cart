import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: {
    city: '',
    region: '',
    country_name: '',
    postal: '',
  },
};

const util = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setLocation(state, { payload }) {
      state.location.city = payload.city;
      state.location.region = payload.region;
      state.location.country_name = payload.country_name;
      state.location.postal = payload.postal;
    },
  },
});

export const { setLocation } = util.actions;

export default util.reducer;
