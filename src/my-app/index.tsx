import { Stars } from '@react-three/drei';
import { DevTools, FadeToBlack, TeleportTravel, ThumbStickRotation } from '@topashq/toolkit';
import { ErrorContext } from 'contexts/ErrorContext';
import { GameSessionContext } from 'contexts/GameSessionContext';
import { UserContext } from 'contexts/UserContext';
import useHighscores from 'hooks/useHighscores';
import { ReactElement, useContext, useState } from 'react';
import useSound from 'use-sound';
import { postScore } from 'utils/scores';
import Tipper from 'vr-app/ui/tipper/Tipper';

import targetHitSound from './assets/audio/target-hit.mp3';
import DemoBox from './components/DemoBox';
import Ground from './components/Ground';
import Lighting from './components/Lighting';
import Plant from './components/Plant';
import Timer from './components/Timer';
import * as config from './config';

const MyApp = (): ReactElement => {
  const [showExitGame, setShowExitGame] = useState(false);
  const [playSound] = useSound(targetHitSound);

  const { scene } = useContext(GameSessionContext);
  const { handleError } = useContext(ErrorContext);
  const { user, credentials } = useContext(UserContext);

  // eslint-disable-next-line
  const handlePostScore = () => {
    if (!user || !credentials) {
      return;
    }

    try {
      postScore(user, credentials, config.appId, 9000);
    } catch (err) {
      handleError(err);
    }
  };

  const { highscores } = useHighscores(config.appId);

  return (
    <>
      <Tipper appId={config.appId} />

      <color attach="background" args={['#222']} />
      <Stars />
      <Lighting />

      <group position={[0, 0, -10]}>
        <Timer position={[0, 3, 0]} />
        <Plant position={[-1, 0, 0]} />
        <DemoBox position={[1, 1, 0]} color="yellow" text="Click Me" onSelect={() => playSound()} />
        <DemoBox position={[-20, 1, -20]} color="red" text="Exit Game" onSelect={() => setShowExitGame(true)} />
      </group>

      <ThumbStickRotation />

      <TeleportTravel>
        <Ground />
      </TeleportTravel>

      {process.env.NODE === 'development' && <DevTools />}
      {showExitGame && <FadeToBlack callback={() => scene.handleSceneChange('sixStarsArcade')} delay={3000} />}
    </>
  );
};

export default MyApp;
