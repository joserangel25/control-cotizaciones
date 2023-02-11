import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cotizaciones: JSON.parse(localStorage.getItem('cotizaciones')) ?? [],
  cotizacionAccion: {} 
}

export const cotizacionesSlice = createSlice({
  name:'cotizaciones',
  initialState,
  reducers: {
    agregarCotizacion: (state, action) => {
      state.cotizaciones.push(action.payload)
      localStorage.setItem('cotizaciones', JSON.stringify(state.cotizaciones))
    },
    obtenerCotizacion: (state, action) => {
      state.cotizacionAccion = action.payload
    },
    quitarCotizacionObtenida: (state) => {
      state.cotizacionAccion = {}
    },
    editarCotizacion: (state, action) => {
      state.cotizaciones = state.cotizaciones.map(cotizacion => cotizacion.id === action.payload.id ? action.payload : cotizacion)
      localStorage.setItem('cotizaciones', JSON.stringify(state.cotizaciones))
      state.cotizacionAccion = {}
    }
  }
})

export const { agregarCotizacion, obtenerCotizacion, editarCotizacion, quitarCotizacionObtenida } = cotizacionesSlice.actions