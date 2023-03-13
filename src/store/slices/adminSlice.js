import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState: {
    agencia: {},
    colaborador: {},
    loading: false
  },
  reducers: {
    seleccionarAgencia: (state, action) => {
      state.agencia = action.payload;
    },
    seleccionarColaborador: (state, action) => {
      state.colaborador = action.payload
    }
  }
});

export const { seleccionarAgencia, seleccionarColaborador } = adminSlice.actions