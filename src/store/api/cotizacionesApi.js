import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cotizacionesApi = createApi({
  reducerPath: 'cotizacionesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.auth.token;
        headers.set('authorization', `Bearer ${token}`)
        return headers;
    },
  }),
  endpoints: (builder) => ({
    getCotizaciones: builder.query({
      query: () => '/cotizaciones'
    }),
  })
})

export const { useGetCotizacionesQuery } = cotizacionesApi