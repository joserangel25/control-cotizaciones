import { configureStore } from '@reduxjs/toolkit'
import { cotizacionesSlice } from './slices/cotizacionesSlice'

export const store = configureStore({
  reducer: {
    cotizaciones: cotizacionesSlice.reducer
  }
})