import { User } from "models/User";
import { rootApi } from "./RootApi";

const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<User[], void>({
      query: () => ({
        url: "users",
      }),
      providesTags: ["Users"],
    }),

    user: builder.query<User, number>({
      query: (id) => ({
        url: `users/${id}`,
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useUsersQuery, useUserQuery } = api;

export default api;
