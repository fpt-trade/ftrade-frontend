import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLoading: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.showLoading = true;
    },
    hideLoading: (state) => {
      state.showLoading = false;
    }
  }
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
