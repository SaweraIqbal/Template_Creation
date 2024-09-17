import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homePageReducer from './slices/homePageSlice';
import landingPageReducer from './slices/landingPageSlice';
import portfolioReducer from './slices/portfolioSlice';
import userSliceReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSliceReducer);

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    landingPage: landingPageReducer,
    portfolio: portfolioReducer,
    user: persistedUserReducer,
  },
  // Disable serializable check if necessary
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // or specify parts of state or actions to check
    }),
});

export const persistor = persistStore(store);
export default store;
