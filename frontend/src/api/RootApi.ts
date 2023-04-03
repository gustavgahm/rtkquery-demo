import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'http://localhost:5001';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: () => ({}),
});
