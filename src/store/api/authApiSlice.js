import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL
  }),
  endpoints: (builder) => ({
    onLogin: builder.mutation({
      query: (user) => ({
        url: '/usuarios/login',
        method: 'POST',
        body: user
      })
    })
  })
})

export const { useOnLoginMutation } = authApiSlice