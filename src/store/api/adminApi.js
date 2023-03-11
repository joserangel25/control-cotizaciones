import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  name: 'Admin Api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.auth.token || localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers;
  },
  }),
  tagTypes: ['Agencias'],
  endpoints: (builder) => ({
    getAgenciasApi: builder.query({
      query: () => '/agencias',
      providesTags: ['Agencias']
    }),
    agregarAgenciaApi: builder.mutation({
      query: (agencia) =>({
        url: '/agencias',
        method: 'POST',
        body: agencia
      }),
      invalidatesTags: ['Agencias']
    })
  })
});

export const  { useGetAgenciasApiQuery, useAgregarAgenciaApiMutation } = adminApi