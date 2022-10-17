import { useFrame, Vector3 } from '@react-three/fiber';
import PlantModel from 'my-app/models/PlantModel';
import { useRef } from 'react';
import { Group } from 'three';

type Props = {
  position?: Vector3;
};

const Plant = ({ position }: Props): React.ReactElement => {
  const ref = useRef<Group>(null);

  useFrame((_, dt) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotateY(dt / 2);
  });

  return (
    <group ref={ref} position={position}>
      <PlantModel />;
    </group>
  );
};

export default Plant;
