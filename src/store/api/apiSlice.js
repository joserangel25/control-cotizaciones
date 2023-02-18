import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cotizacionesApi = createApi({
  reducerPath: 'cotizacionesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
  }),
  endpoints: (builder) => ({
    getCotizaciones: builder.query({
      query: () => '/cotizaciones'
    }),
    onLogin: builder.mutation({
      query: (user) => ({
        url: '/usuarios/login',
        method: 'POST',
        body: user
      })
    })
  })
})

export const { useGetCotizacionesQuery, useOnLoginMutation } = cotizacionesApi