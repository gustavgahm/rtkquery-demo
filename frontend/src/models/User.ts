export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export const fullName = (user: User | null) =>
  user ? `${user?.firstName} ${user?.lastName}` : '';
