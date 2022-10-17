import { createContext } from 'react';

type Props = {
  scene: {
    currentScene: 'mock';
    handleSceneChange: (scene: 'sixStarsArcade' | 'galex') => void;
  };
};

/** Mock game session context */
export const GameSessionContext = createContext<Props>({
  scene: {
    currentScene: 'mock',
    handleSceneChange: () => null,
  },
});
