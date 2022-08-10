import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  config: {}
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.config = { ...state.config, ...action.payload };
    }
  }
});

export const { addToast } = toastSlice.actions;

export const selectToast = (state) => state.toast.config;

export default toastSlice.reducer;
