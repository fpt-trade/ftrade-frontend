import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  email: null,
  isLogin: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.isLogin = true;
    },
    logout: (state) => {
      state.userName = null;
      state.email = null;
      state.isLogin = false;
    }
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
