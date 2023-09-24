import { createSlice } from '@reduxjs/toolkit';
import { blue } from '@ant-design/colors';

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    lang: 'en-US',
    colorPrimary: blue[7],
  },
  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { switchLang } = configSlice.actions;

export default configSlice.reducer;
