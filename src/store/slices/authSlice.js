import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    loading: false
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
      localStorage.setItem('token', action.payload.token)
    },
    logoutAction: (state) => {
      state.auth = {},
      localStorage.removeItem('token')
    }
  }
});

export const { login, logoutAction } = authSlice.actions