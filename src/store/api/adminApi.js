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
  tagTypes: ['Agencias', 'Agencia'],
  endpoints: (builder) => ({
    getAgenciasApi: builder.query({
      query: () => '/agencias',
      providesTags: ['Agencias']
    }),
    getAgenciaById: builder.query({
      query: (id) => `/agencias/${id}`,
      providesTags: ['Agencia']
    }),
    agregarAgenciaApi: builder.mutation({
      query: (agencia) =>({
        url: '/agencias',
        method: 'POST',
        body: agencia
      }),
      invalidatesTags: ['Agencias']
    }),
    eliminarAgenciaApi: builder.mutation({
      query: (id) => ({
        url: `/agencias/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Agencias']
    }),
    editarAgenciaApi: builder.mutation({
      query: (datos) => ({
        url: `/agencias/${datos._id}`,
        method: 'POST',
        body: datos
      }),
      invalidatesTags: ['Agencias']
    }),
    buscarUsuarioApi: builder.mutation({
      query: (email) => ({
        url: '/usuarios/buscar-usuario',
        method: 'POST',
        body: email
      })
    }),
    añadirUsuarioAAgenciaApi: builder.mutation({
      query: (datos) => ({
        url: `/agencias/${datos.idAgencia}/colaborador`,
        method: 'POST',
        body: datos
      }),
      invalidatesTags: ['Agencia']
    }),
    eliminarUsuarioAAgenciaApi: builder.mutation({
      query: (datos) => ({
        url: `/agencias/${datos.idAgencia}/colaborador`,
        method: 'PATCH',
        body: datos
      }),
      invalidatesTags: ['Agencia']
    })
  })
});

export const  { useGetAgenciasApiQuery,
                useGetAgenciaByIdQuery, 
                useAgregarAgenciaApiMutation,
                useEliminarAgenciaApiMutation,
                useEditarAgenciaApiMutation,
                useBuscarUsuarioApiMutation,
                useAñadirUsuarioAAgenciaApiMutation,
                useEliminarUsuarioAAgenciaApiMutation } = adminApi