import { User } from 'models/User';

import { rootApi } from './RootApi';

const userTag = ({ id }: User) => ({ type: 'Users' as const, id: id });

const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<User[], void>({
      query: () => ({
        url: 'users',
      }),
      providesTags: (result) => [...(result?.map(userTag) ?? []), 'Users'],
    }),

    user: builder.query<User, number>({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: (result) => (result ? [userTag(result)] : []),
    }),

    saveUser: builder.mutation<void, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: (_, error, user) => (!error ? [userTag(user)] : []),
    }),
  }),
});

export const { useUsersQuery, useUserQuery, useSaveUserMutation } = api;

export const usePrefetchUserQuery = () => api.usePrefetch('user');

export default api;
