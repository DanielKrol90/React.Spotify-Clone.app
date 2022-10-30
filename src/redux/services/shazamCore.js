import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseURL: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'ad58270b25msh70df92ecdcc074cp1d2793jsna9b505c1a777',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/world' }),
  }),
});
