import { Canvas } from '@react-three/fiber';
import { Controllers, VRButton, XR } from '@react-three/xr';
import { ErrorContext } from 'contexts/ErrorContext';
import { GameSessionContext } from 'contexts/GameSessionContext';
import { UserContext } from 'contexts/UserContext';
import MyApp from 'my-app';

/** Mock error handler */
const handleError = (err: unknown) => {
  console.debug(err);
};

/** Mock scene changer */
const handleSceneChange = (scene: 'sixStarsArcade' | 'galex') => {
  console.debug(`Switching scene to ${scene}..`);
};

function App() {
  return (
    <GameSessionContext.Provider value={{ scene: { currentScene: 'mock', handleSceneChange } }}>
      <UserContext.Provider value={{ user: 'mock', credentials: 'mock' }}>
        <VRButton />
        <Canvas>
          <XR>
            <Controllers />
            <ErrorContext.Provider value={{ handleError }}>
              <MyApp />
            </ErrorContext.Provider>
          </XR>
        </Canvas>
      </UserContext.Provider>
    </GameSessionContext.Provider>
  );
}

export default App;
