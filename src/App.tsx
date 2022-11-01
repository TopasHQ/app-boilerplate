import { Canvas } from '@react-three/fiber';
import { Controllers, VRButton, XR } from '@react-three/xr';
import MyApp from 'my-app';

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <MyApp />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
