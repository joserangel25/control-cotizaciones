import { configureStore } from '@reduxjs/toolkit'

//Apis
import { authApiSlice } from './api/authApiSlice'
import { cotizacionesApi } from './api/cotizacionesApi'

//Slices
import { authSlice } from './slices/authSlice'
import { cotizacionesSlice } from './slices/cotizacionesSlice'

export const store = configureStore({
  reducer: {
    cotizaciones: cotizacionesSlice.reducer,
    auth: authSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [cotizacionesApi.reducerPath]: cotizacionesApi.reducer
  },
  middleware: (getDefaultMiddledware) => getDefaultMiddledware().concat( cotizacionesApi.middleware, authApiSlice.middleware ),
  // middleware: (getDefaultMiddledware) => getDefaultMiddledware().concat( authApiSlice.middleware )

})