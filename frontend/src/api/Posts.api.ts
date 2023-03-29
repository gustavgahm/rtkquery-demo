import { take } from 'lodash/fp';
import { Post } from 'models/Post';

import { rootApi } from './RootApi';

const postTag = ({ id }: Post) => ({ type: 'Posts' as const, id: id });

const api = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => ({
        url: 'posts',
      }),
      providesTags: (result) => [...(result?.map(postTag) ?? []), 'Posts'],
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('ws://localhost:5001/posts');

        await cacheDataLoaded;

        const listener = (event: MessageEvent) => {
          const data = JSON.parse(event.data);
          updateCachedData((draft) => {
            return take(15, [data, ...draft]);
          });
        };
        ws.addEventListener('message', listener);

        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { usePostsQuery } = api;

export default api;
