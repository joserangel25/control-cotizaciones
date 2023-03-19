import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState: {
    agencia: {},
    cotizacionesAgencia: [],
    colaborador: {},
    loading: false
  },
  reducers: {
    seleccionarAgencia: (state, action) => {
      state.agencia = action.payload;
    },
    seleccionarColaborador: (state, action) => {
      state.colaborador = action.payload
    },
    agregarCotizaciones: (state, action) => {
      state.cotizacionesAgencia.push(action.payload)
    },
    eliminarCotizaciones: (state, action) => {
  
      const newCotizacines = state.cotizacionesAgencia.filter(cotizaciones => cotizaciones.creador.toString() !== action.payload.toString());
      state.cotizacionesAgencia = newCotizacines;
    }
  }
});

export const { seleccionarAgencia, seleccionarColaborador, agregarCotizaciones } = adminSlice.actions