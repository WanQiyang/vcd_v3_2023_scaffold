import { configureStore } from '@reduxjs/toolkit';
import configReducer from './slices/config';
import globalReducer from './slices/global';

export default configureStore({
  reducer: {
    config: configReducer,
    global: globalReducer,
  },
});
