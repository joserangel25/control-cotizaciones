import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cotizaciones: JSON.parse(localStorage.getItem('cotizaciones')) ?? [] 
}

export const cotizacionesSlice = createSlice({
  name:'cotizaciones',
  initialState,
  reducers: {
    agregarCotizacion: (state, action) => {
      state.cotizaciones.push(action.payload)
      localStorage.setItem('cotizaciones', JSON.stringify(state.cotizaciones))
    }
  }
})

export const { agregarCotizacion } = cotizacionesSlice.actions