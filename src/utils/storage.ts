import { User } from '../types/auth';

export const loadUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUsers = (users: User[]): void => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const saveCurrentUser = (username: string): void => {
  localStorage.setItem('currentUser', username);
};