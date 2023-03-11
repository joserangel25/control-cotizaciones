import { configureStore } from '@reduxjs/toolkit'

//Apis
import { authApiSlice } from './api/authApiSlice'
import { cotizacionesApi } from './api/cotizacionesApi'
import { adminApi } from './api/adminApi'

//Slices
import { authSlice } from './slices/authSlice'
import { cotizacionesSlice } from './slices/cotizacionesSlice'
import { modalSlice } from './slices/modalSlice'

export const store = configureStore({
  reducer: {
    cotizaciones: cotizacionesSlice.reducer,
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [cotizacionesApi.reducerPath]: cotizacionesApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddledware) => getDefaultMiddledware().concat( cotizacionesApi.middleware, authApiSlice.middleware, adminApi.middleware ),

})