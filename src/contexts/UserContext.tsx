import { createContext } from 'react';

type Props = {
  credentials: 'mock' | null;
  user: 'mock' | null;
};

/** Mock user context */
export const UserContext = createContext<Props>({
  credentials: null,
  user: null,
});
