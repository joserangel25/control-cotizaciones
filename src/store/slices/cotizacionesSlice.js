import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cotizaciones: [],
  cotizacionAccion: {},
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
      const cotizacion = state.cotizaciones.find(cotizacion => cotizacion._id === action.payload)
      state.cotizacionAccion = cotizacion
    },
    quitarCotizacionObtenida: (state) => {
      state.cotizacionAccion = {}
    },
    editarCotizacion: (state, action) => {
      state.cotizaciones = state.cotizaciones.map(cotizacion => cotizacion._id === action.payload.id ? action.payload : cotizacion)
      localStorage.setItem('cotizaciones', JSON.stringify(state.cotizaciones))
      state.cotizacionAccion = {}
    },
    setCotizacionesStore: (state, action) => {
      state.cotizaciones = action.payload;
    }
  }
})

export const { agregarCotizacion, 
               obtenerCotizacion, 
               editarCotizacion, 
               quitarCotizacionObtenida,
               setCotizacionesStore } = cotizacionesSlice.actions