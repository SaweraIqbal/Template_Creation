// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './slices/homePageSlice';
import landingPageReducer from './slices/landingPageSlice';
import portfolioReducer from './slices/portfolioSlice';

const store = configureStore({
  reducer: {
    homePage: homePageReducer, // Add other slices here as needed
    landingPage: landingPageReducer,
    portfolio: portfolioReducer,
  },
});

export default store;
