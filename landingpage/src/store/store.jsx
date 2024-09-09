import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './features/headerSlice1';

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;
