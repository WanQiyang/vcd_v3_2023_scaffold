import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    page: 'home',
  },
  reducers: {
    switchPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { switchPage } = globalSlice.actions;

export default globalSlice.reducer;
