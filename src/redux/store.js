import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import loadingReducer from './slices/loading';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer
  }
});
