import { loadJson } from "./utilities";
import { pick, map, find, pipe, sortBy } from "lodash/fp";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

const asUser: (x: any) => User = (x) =>
  x ? pick(["id", "email", "firstName", "lastName"])(x) : null;

const asUsers = map(asUser);

const findById = (id) => find((x) => x.id.toString() === id);

const queryById = (id: string) => pipe(findById(id), asUser);

const load = async () => {
  const { users } = await loadJson("data/users.json");
  return users;
};

export const loadUsers = async () => {
  const users = await load();
  return pipe(sortBy(["firstName", "lastName"]))(asUsers(users));
};

export const loadUser = async (id: string) => {
  const users = await load();
  return queryById(id)(users);
};
