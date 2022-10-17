import { createContext } from 'react';

type Props = {
  handleError: (error: unknown) => void;
};

/** Mock error context */
export const ErrorContext = createContext<Props>({
  handleError: () => null,
});
