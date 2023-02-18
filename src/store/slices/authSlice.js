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
      const token = 'Bearer ' + action.payload.token
      localStorage.setItem('token', token)
    }
  }
});

export const { login } = authSlice.actions