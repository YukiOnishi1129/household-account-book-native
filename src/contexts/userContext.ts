import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from 'src/types/user';

type UserContextValue = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext({} as UserContextValue);
