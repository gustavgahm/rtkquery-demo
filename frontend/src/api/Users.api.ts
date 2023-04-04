import { User } from 'models';
import { rootApi } from './RootApi';

const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({

    users: builder.query<User[], void>({
      query: () => 'users',
    }),

    user: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useUsersQuery, useUserQuery } = api;

export default api;
