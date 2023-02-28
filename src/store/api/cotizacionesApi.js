import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cotizacionesApi = createApi({
  reducerPath: 'cotizacionesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.auth.token;
        headers.set('authorization', `Bearer ${token}`)
        return headers;
    },
  }),
  tagTypes: ['Cotizaciones','Cotizacion'],
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
      query: (id) => `/cotizaciones/${id}`,
      providesTags: ['Cotizacion']
    }),
    editCotizacionStore: builder.mutation({
      query: (newCoti) => ({
        url: `/cotizaciones/${newCoti.id}`,
        method: 'POST',
        body: newCoti
      }),
      invalidatesTags: ['Cotizaciones']
    }),
    crearInteraccionStore: builder.mutation({
      query: (interaccion) => ({
        url: '/interacciones',
        method: 'POST',
        body: interaccion
      }),
      invalidatesTags: ['Cotizacion']
    }) 
  })
})

export const { useGetCotizacionesQuery, 
               useRegistrarCotizacionMutation,
               useGetCotizacionStoreQuery,
               useEditCotizacionStoreMutation,
               useCrearInteraccionStoreMutation,
               } = cotizacionesApi