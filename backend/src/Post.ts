import { loadJson, saveJson } from './utilities';
import { pick, map, find, pipe, sortBy, uniqueId} from 'lodash/fp';

export interface Post {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

const asPost: (x: any) => Post = (x) =>
  x
    ? { ...pick(['title', 'body', 'userId'])(x), timestamp: new Date().toLocaleTimeString(), id: uniqueId() }
    : null;

const asPosts = map(asPost);

const load = async () => {
  const { posts } = await loadJson('data/posts.json');
  return posts;
};

export const loadPosts = async (): Promise<Post[]> => {
  const posts = await load();
  return pipe(sortBy(['firstName', 'lastName']))(asPosts(posts));
};
