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
  tagTypes: ['Cotizaciones',],
  endpoints: (builder) => ({
    getCotizaciones: builder.query({
      query: () => '/cotizaciones',
      providesTags: ['Cotizaciones']
    }),
    registrarCotizacion: builder.mutation({
      query: (cotizacion) => ({
        url: '/cotizaciones',
        method: 'POST',
        body: cotizacion
      }),
      invalidatesTags: ['Cotizaciones']
    }),
    getCotizacionStore: builder.query({
      query: (id) => `/cotizaciones/${id}`
    }),
    editCotizacionStore: builder.mutation({
      query: (newCoti) => ({
        url: `/cotizaciones/${newCoti.id}`,
        method: 'POST',
        body: newCoti
      }),
      invalidatesTags: ['Cotizaciones']
    }) 
  })
})

export const { useGetCotizacionesQuery, 
               useRegistrarCotizacionMutation,
               useGetCotizacionStoreQuery,
               useEditCotizacionStoreMutation } = cotizacionesApi