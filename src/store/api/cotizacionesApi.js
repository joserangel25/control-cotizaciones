import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cotizacionesApi = createApi({
  reducerPath: 'cotizacionesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        console.log(getState());
        console.log("HEADERS", headers);
        console.log(token);
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