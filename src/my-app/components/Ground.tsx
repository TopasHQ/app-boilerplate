const Ground = () => {
  return (
    <mesh position={[0, -0.01, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow name="traversable">
      <planeGeometry args={[50, 50, 16, 16]} />
      <meshStandardMaterial color="#808080" wireframe />
    </mesh>
  );
};

export default Ground;
