import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import loadingReducer from './slices/loading';
import toastReducer from './slices/toast';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    toast: toastReducer
  }
});
