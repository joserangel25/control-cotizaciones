import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.auth.token || localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers;
  },
  }),
  endpoints: (builder) => ({
    onLogin: builder.mutation({
      query: (user) => ({
        url: '/usuarios/login',
        method: 'POST',
        body: user
      })
    }),
    autenticacionByToken: builder.query({
      query: (token) => '/usuarios/perfil'
    })
  })
})

export const { useOnLoginMutation, useAutenticacionByTokenQuery } = authApiSlice