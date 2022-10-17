import { animated, useSpring } from '@react-spring/three';
import { Float, RoundedBox } from '@react-three/drei';
import { Vector3 } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';
import { Text } from '@topashq/toolkit';
import { useState } from 'react';

type Props = {
  position?: Vector3;
  text: string;
  color: string;
  onSelect: () => void;
};

const DemoBox = ({ position, color, text, onSelect }: Props): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  const { scale } = useSpring<{ scale: number }>({
    scale: isHovered ? 1.5 : 1,
  });

  return (
    <animated.group scale={scale} position={position}>
      <Float>
        <Interactive onHover={() => setIsHovered(true)} onBlur={() => setIsHovered(false)} onSelect={onSelect}>
          <Text color="#fff" black>
            {text}
          </Text>
          <RoundedBox>
            <meshBasicMaterial color={color} opacity={0.5} transparent />
          </RoundedBox>
        </Interactive>
      </Float>
    </animated.group>
  );
};

export default DemoBox;
