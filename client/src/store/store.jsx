import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homePageReducer from './slices/homePageSlice';
import landingPageReducer from './slices/landingPageSlice';
import portfolioReducer from './slices/portfolioSlice';
import userSliceReducer from './slices/userSlice';
import faqReducer from './slices/faqSlice';

// Function to create a persistConfig for each reducer based on user ID
const createPersistConfig = (key) => ({
  key,
  version: 1,
  storage,
});

// Get the current user's ID from localStorage
const userId = JSON.parse(localStorage.getItem('user'))?.id || 'guest';

// Create unique persist configs for each reducer with user-specific keys
const userPersistConfig = createPersistConfig(`user_${userId}`);
const homePagePersistConfig = createPersistConfig(`homePage_${userId}`);
const landingPagePersistConfig = createPersistConfig(`landingPage_${userId}`);
const portfolioPersistConfig = createPersistConfig(`portfolio_${userId}`);
const faqPersistConfig = createPersistConfig(`faq_${userId}`);

// Apply persistReducer to each slice with unique keys
const persistedUserReducer = persistReducer(userPersistConfig, userSliceReducer);
const persistedHomePageReducer = persistReducer(homePagePersistConfig, homePageReducer);
const persistedLandingPageReducer = persistReducer(landingPagePersistConfig, landingPageReducer);
const persistedPortfolioReducer = persistReducer(portfolioPersistConfig, portfolioReducer);
const persistedFaqReducer = persistReducer(faqPersistConfig, faqReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    homePage: persistedHomePageReducer,
    landingPage: persistedLandingPageReducer,
    portfolio: persistedPortfolioReducer,
    faq: persistedFaqReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for persisted state
    }),
});

export const persistor = persistStore(store);
export default store;
