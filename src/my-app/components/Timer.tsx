import { Vector3 } from '@react-three/fiber';
import { Text } from '@topashq/toolkit';
import { useEffect, useState } from 'react';

type Props = {
  position?: Vector3;
};

const Timer = ({ position }: Props): React.ReactElement => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const increaseTime = () => {
      setTime(prevTime => (prevTime += 1));
    };

    const id = setInterval(increaseTime, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <group position={position}>
      <Text fontSize={0.2} position={[0, 0.7, 0]}>
        Time elapsed:
      </Text>
      <Text black fontSize={1}>
        {time}s
      </Text>
    </group>
  );
};

export default Timer;
