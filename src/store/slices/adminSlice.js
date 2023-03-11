import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState: {
    agencia: {},
    loading: false
  },
  reducers: {
    seleccionarAgencia: (state, action) => {
      state.agencia = action.payload;
    },
  }
});

export const { seleccionarAgencia } = adminSlice.actions