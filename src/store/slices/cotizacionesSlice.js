import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cotizaciones: [],
  cotizacionAccion: {},
  alerta: {}
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
      state.cotizaciones = state.cotizaciones.map(cotizacion => cotizacion._id === action.payload._id ? action.payload : cotizacion)
      // localStorage.setItem('cotizaciones', JSON.stringify(state.cotizaciones))
      state.cotizacionAccion = {}
    },
    setCotizacionesStore: (state, action) => {
      state.cotizaciones = action.payload;
    },
    setAlerta: (state, action) => {
      state.alerta = action.payload
    }
  }
})

export const { agregarCotizacion, 
               obtenerCotizacion, 
               editarCotizacion, 
               quitarCotizacionObtenida,
               setCotizacionesStore,
               setAlerta } = cotizacionesSlice.actions